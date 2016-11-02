======
APACHE
======

Configuration
=============

httpd.conf
::::::::::
Après modification relancé Apache

serverRoot
::::::::::
Repertoire contenant la distribution apache

Listen
::::::
Adresse IP et Port sur lequel le server répond.

ServerAdmin
:::::::::::
Adresse Email de l'administrateur.

ServerName
::::::::::
Nom DNS ou adresse IP du server

DocumentRoot
::::::::::::
Chemin vers le dossier racine des pages web.
(lien avec un Directory)

Directory <path>
::::::::::::::::
Définit les droits d'accès d'un répertoire et de ses sous-répertoires.

Files <nom>
:::::::::::
Décrits les droits sur tous les fichiers du nom donné dans les répertoire.

Options
:::::::
Définits les options de configurations.

AccessFileName
::::::::::::::
Nom des fichiers décrivants les droits d'accès local par défaut .htaccess.

AllowOverride
:::::::::::::
Liste des directives autorisées dans les fichier .htaccess

Alias 
:::::
Définit un raccourci.

ScriptAlias
:::::::::::
Alias des scripts cgi.

AddType
:::::::
Associe un type MIME à une extension de fichier.

AddHandler
::::::::::
Définit un gestionnaire pour une extension.

Action
::::::
Définit une action à entreprendre pour traiter un fichier de type MIME défini ou à un Handler défini.

AddHandler
::::::::::
définit un gestionnaire pour une extension donnée.

Redirect
::::::::
Redirige une requete vers une autre URL.

ErrorDocument
:::::::::::::
page vers lesquelles sont redirigés les requetes en cas d'erreur.

DefaultType
:::::::::::
Type MIME à utiliser quand on à a faire à une extension de fichier inconnu.
(application/octet-stream pour dauver le fichier sur le disque)

DirectoryIndex
::::::::::::::
Lance la page indiquée dans le navigateur sans devoir la spécifié.
