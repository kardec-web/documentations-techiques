=============
HowTo : MySQL
=============

Convertir une base en utf8
========================== 
::

    mysqldump --user=username --password=password --default-character-set=latin1 --skip-set-charset dbname > dump.sql
    sed -r 's/latin1/utf8/g' dump.sql > dump_utf.sql
    mysql --user=username --password=password --execute="DROP DATABASE dbname; CREATE DATABASE dbname CHARACTER SET utf8 COLLATE utf8_general_ci;"
    mysql --user=username --password=password --default-character-set=utf8 dbname < dump.sql

Se connecter à une base
======================= 
::

	mysql -u <utilisateur> -p<motDePasse>

Utilisateur
===========
Changer le mot de passe administrateur
====================================== 
::

    mysqladmin -u root password <pass>

Rajouter des utilisateurs 
=========================
Accès à la base local sur une base, avec un mot de passe et avec toutes les options
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::

	GRANT ALL PRIVILEGES ON <maBase>.* TO '<user>'@'localhost' IDENTIFIED BY '<motPasse>' WITH GRANT OPTION;

Afficher la liste des utilisateur
:::::::::::::::::::::::::::::::::
::

    USE mysql ;
    SELECT User FROM user;

Sauvegarde et restauration
===========================
Toutes les tables d'une base
::::::::::::::::::::::::::::
::

    mysqldump -u <user> -p<passe> <base à sauver> > save.sql

Certaines base de données
:::::::::::::::::::::::::
::

    mysqldump -u<user> -p<pass> --databases DB1 [DB2 DB3]

Toutes les bases de données
:::::::::::::::::::::::::::
::

    mysqldump -u <user> -p<passe> --all-databases > backup.sql 

Uniquement la structure
:::::::::::::::::::::::
::

    mysqldump -u<user> -p<secret> --no-data <base> > stocksdb.sql 

Uniquement les données
::::::::::::::::::::::
::

    mysqldump -u<user> -p<passe> --no-create-info <base> > stocksdb.sql 

Restaurer une base
::::::::::::::::::
::

    mysql -u <user> -p<passe> -h <host> -D <base> < backup-production.sql

