
> Written with [StackEdit](https://stackedit.io/).

# Odoo Serveur

## Hardware

### 1-5 utilisateurs
La recommendation minimum pour pouvoir faire tourner une instance Odoo pour accueillir de un à cinq utilisteurs simultanés est la suivante:
* 512 Mo Ram
* 5Go d'espace disque

## Monitoring
 Un monitoring tel que Munit ou Shinked 2 devrait être installé et monitoré au minimum les ressources suivantes
 * Utilisation Ram
 * Utilisation CPU
 * Espace Disque

Un e-mail devrait partir si l'espace disque devient limite

## Backups
Les bases de données PostgreSQL devraient être backupée une fois par jour mais suivant les besoins du client il pourrait y avoir plusieurs backup par jour.

Les backups devraient être accessible via un accès SFTP et placé dans un dossier par date au format YYYY-MM-DD

## Logiciels requis
### [Supervisor]( http://supervisord.org)
Supervisor sera utilisé pour gérer les processus propre à Odoo et démarrer/éteindre une instance Odoo.

### nginx 
Nging sera utilisé comme proxy pour faire le mapping entre le port 80 de la machine sur un domaine vers le port de l'instance Odoo

### Python 2.7
Odoo est développé dans la version 2 de Python

### PostgrSQL
Odoo utilise la base de données PostgreSQL pour stocker les données de l'application.

### git
Le versionning de code git sera utilisé pour télécharger le code source d'Odoo.

## Envoi d'e-mails
Le serveur doit pouvoir envoyer des e-mails

## Linux Users

Chaque instance Odoo installée sur le serveur doit avoir son propre utilisateur, ces utilisateurs doivent avoir un accés à leur dossier personnel.
Idéalement il devrait avoir un accès SSH pour pouvoir éxécuter les commandes
* ps, top, hop et tuer les processus Odoo récalcitrant
* cp,mv vim pour pouvoir manipuler les fichiers et dossiers
* supervisorctl pour pouvoir redémarer facilement l'instance Odoo
* git pour pouvoir mettre à jour facilement Odoo

# Installation pas à pas

## Installation des logiciels de base
$ sudo apt-get install git

## Créer un utilisateur pour l'instance Odoo
$ sudo useradd -m -g sudo -s /bin/bash odoo_instance_name
$ sudo passwd odoo_instance_name

## Créer un accès SFTP
Pour qu'un utilisateur ai un accès SFTP il faut que le répertoire home ai le propriétaire root, dans le répertoire home nous créerons un dossier avec la version d'Odoo à installer
$ cd /home/odoo_instance_name
$ sudo mkdir v9
$ sudo chown v9 odoo_instance_name:odoo_instance_name v9
$ sudo chown root:root /home/odoo_instance_name

# Installations des fichiers de base d'Odoo via git

$ git clone https://github.com/odoo/odoo.git -b 9.0