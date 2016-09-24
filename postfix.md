# installer postfix
sudo apt-get install postfix

Choisir Site internet
Indiquer un nom de domaine

# Configurer Nom de domaine
"mercure" messager des dieux (on nommer le serveur mail)
hostname -f
hostname --fqdn
indiquer le nom de la machine dans /etc/hostname
ensuite modifier le fichier /etc/hosts
Ajouter le numéro IP visible de l'extérieur + le nom de domaine, exemple
192.168.24.101 mercure.jhermand.ovh mercure
on peut aussi rajouter un ip avec mail.jhermand.net

et redémarer hostname
sudo service hostname restart

## Configurer postfix
/etc/postfix
fichier principal /etc/postfix/main.cf

--> Modifier smtpd_banner (supprimer (Ubuntu) par exempe)
indiquer le hotname dans la variable "myhostname" (exemple mercure.jhermand.ovh)

* Indiquer les destinations autorisées domaines pour lequel postfix ne va pas relayer les e-mails, il va considérer être comme le destinataire final
-> mydestination: rajouter le nom de domaine  et le nom de la machine (hostname) séparés par des virgules

* Indiquer que l'on peut envoyer des e-mails à tout le monde (mynetworks indique qui peut envoyer des e-mails à tout le monde)
rajouter dans la variable mynetworks l'ip de la machine

* Tester la configuration de postfix
postconf

* Charger les modifications dans postfix
sudo service postfix reload

* fichier de configuration
/var/log/postfix

# Installer postfix admin
## Installer la db, apache 2 et PHP
sudo apt-get install mysql-server apache2 libapache2-mod-php5 php5-imap

## Télécharger le deb depuis postfix admin et l'installer
sudo dpkg -i postfixadmin-2.93.deb

## Installer Dovecot, de Clamav et de SpamAssassin
sudo apt-get install bsd-mailx dovecot-core dovecot-imapd dovecot-pop3d dovecot-mysql
sudo apt-get install clamav  clamav-daemon spamassasin
Dovecot -> interface IMAP et pop3  pour Postfix

# Configurer postfixadmin
/etc/postfixadmin

config.inc.php
$CONF['admin_email'] = 'jeremy685@msn.com';
$CONF['default_aliases'] = array (
    'abuse' => 'abuse@jhermand.ovh',
    'hostmaster' => 'hostmaster@change-this-to-your.domain.tld',
    'postmaster' => 'postmaster@change-this-to-your.domain.tld',
    'webmaster' => 'webmaster@change-this-to-your.domain.tld'
);

sudo ln -s /etc/apache2/conf.d/postfixadmin /etc/apache2/conf-available/postfixadmin.conf
sudo a2enconf postfixadmin
sudo service apache2 restart

* Setup
http://127.0.0.1:8082/postfixadmin/setup.php

* Créer le compte VMAIL
Pour postfix le groupe d'utilisateur doit être mail
 sudo useradd -r -g mail -m -s  /user/sbin/nologin -c "Virtals E-mail" vmail
-r pas de temps de validité pour le compte (utilisé par le système)
-m créer le répertoire personnel
-s le shell
-c Commentaire


# Configurer Dovecot
/etc/dovecot -> /etc/dovecot/local.conf
la commande doveconf permet de tester le fichier de configuration
## Configurer dovecot pour pour la gestion des comptes virtuels dans le répertoire maildir de l'utilisateur vmail
-> via le fichier local.conf adapter les variables présentent dans conf.d/10-mail.conf
mail_location = maildir:/home/vmail/%d/%n
mail_uid=vmail
mail_gid=mail
first_valid_uid=998
last_valid_uid=998
first_valid_gid=8
last_valid_gid=8

Via grep récupérer les id suivants de mail et vmail
grep vmail /etc/passwd
vmail:x:998:8:Virtals E-mail:/home/vmail:/user/sbin/nologin
grep mail /etc/passwd
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin

## Configurer dovecot pour l'authentification des utilisateurs
/etc/dovecot -> /etc/dovecot/local.conf
dans cette partie nous allons confgurer la manière de récupérer les adresses de maildir et les utilisateurs de la db
conf.d/10-auth.conf
conf.d/auth-sql.conf

dans 10-auth.conf
* commenter la ligne system et décommenter la ligne sql

dans auth-sql.conf
* passdb va vérifier l'existance de l'utilisateur et comparer le mot de passe crypté de la db par le mot de passe passé à Devocot lors de l'authentification par l'utilisteur.
* userdb: une fois l'utilisateur authentifié dovecot va chercher les informations de l'utilisateur (le répertoire où se trouve les e-mails)

copier le contenu de auth-sql.conf et le copier dans local.conf
éditer le fichier  /etc/dovecot/dovecot-sql.conf.ext pour indiquer la requète SQL à utiliser pour tester le mot de passe (on peut aussi dupliquer le fichier)
=> driver = mysql
=> connect = host=localhost dbname=postfixadmin user=postfixadmin password=Azerty0
cat /etc/postfixadmin/dbconfig.inc.php pour récupérer le mot de passe
=> default_pass_scheme = MD5-CRYPT
=> password_query = \
   SELECT username as user, password \
   FROM mailbox WHERE username = '%n' and domain = '%d' and active = 1
   ou 
   password_query = \
   SELECT username as user, password \
   FROM mailbox WHERE username = '%u' and active = 1

  %u = user
  %n = username
  %d = domain

# Configurer la gestion des domaines virtuelles par Mysql
/etc/postfix/main.cf
Ou postfix va t-il chercher les domaines et mailboxes vituelles
* créer dans le répertoire de configuration un fichier virtual.inc

user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

* copier le fichier dans mysql_virtual_domain_maps.cf
user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

table = domain
select_field = domain
where_field = domain
additional_conditions = AND WHERE backupmx = 0 AND active = 1

* copier le fichier dans mysql_virtual_mailbox_maps.cf
user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

table = mailbox
select_field = CONCAT(domain, '/', local_part)
where_field = username
additional_conditions = AND active = 1

* copier le fichier dans mysql_virtual_alias_maps.cf
user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

table = alias
select_field = goto
where_field = address
additional_conditions = AND active = 1


* copier le fichier dans mysql_virtual_domain_alias_maps.cf
user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

query = SELECT goto FROM alias AS a JOIN alias_domain AS ad
ON a.address = concat('%u', '@', ad.target_domain)
WHERE ad.alias_domain = '%d'
AND a.active = 1

* copier le fichier dans mysql_virtual_mailbox_domain_alias_maps.cf
user = postfixadmin
password = Azerty0
hosts = 127.0.0.1
dbname = postfixadmin

query = SELECT maildir FROM mailbox AS m JOIN alias_domain AS ad
WHERE ad.alias_domain = '%d'
AND m.username=concat('%u', '@', ad.target_domain)
AND m.active = 1

# Configurer Dovecot SASL pour l'authentification SMTP
postconf -a (vérifier que dovecot apparait bien)
/etc/dovecot/conf.d/10-master.cf (copier la configuration service_auth et la mettre dans le fichier local.conf)

$default_internal_user = dovecot

service auth {

  unix_listener auth-userdb {
    mode = 0600
    user = vmail
    group = mail
  }

  }
  # postfix smtp-auth
  unix_listener /var/spool/postfix/private/auth {
   mode = 0660
   user = postfix
   group = postfix
  }

  # Auth process is run as this user.
  user = $default_internal_user
}

# Configurer l'authentification Dovecot
service auth-worker {
  user = $default_internal_user
}
# Outlook express et Windows mail
auth_mechanisms = plain login

# permettre à postfix de lire les fichier de configuration de dovecot
sudo chown -R vmail:dovecot /etc/dovecot/
sudo chmod -R o-rwx /etc/dovecot/


truc vim ZZ majuscule pour sauver et quitter



# Configurer l'antivirus
Clamav signatures not found in /var/lib/clamav
 * Please retrieve them using freshclam
 * Then run '/etc/init.d/clamav-daemon start'
sudo freshclam
cd /etc/cron.daily
sudo vim clamav
#!/bin/sh
/usr/bin/freshclam
sudo 775 clamav
sudo ./clamav

# configurer Amavis et spamassassin
Amavasis fait la liaison entre les MTA et spamassassin et les MTA et clamav et spamassassin
sudo apt-get install amavis zip bzip2 gzip lzop cabextract cpio file nomarch pax unzip unrar-free zoo ripole
cd /etc/amavis/conf.d
sudo vim 15-content_filter_mode
sudo service amavis restart

# Configurer Spamassassin
sudo vim /etc/default/spamassassin
ENABLED=1
CRON=1
sudo service spamassassin restart

A lire:
http://blog.demees.net/?p=7
https://easyengine.io/tutorials/mail/server/sieve-filtering/
https://www.howtoforge.com/dovecot_mail_server_sieve_virtual_users
DKIM DMARK

imoovdevodoo

createdb -O imoovodoo -T imoovodoo imoovdevodoo
ln -s /etc/nginx/sites-available/imoovdev_app.conf /etc/nginx/sites-enabled/imoovdev_app.conf


http://imoovdev.com2be.be/