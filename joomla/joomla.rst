======
Joomla
======

Installation
============
Base de données
::::::::::::::: ::
    
    -- Creation de la base
    CREATE DATABASE <nom_base> ;
    -- Creation d'un utilisateur dédié
    GRANT ALL PRIVILEGES ON <maBase>.* TO '<user>'@'localhost' IDENTIFIED BY '<motPasse>' WITH GRANT OPTION;

Joomla
::::::
Décompresser l'archive dans les répertoire de votre choix.

Droits sur les fichiers et les dossiers
:::::::::::::::::::::::::::::::::::::::
    + Créer dans la racine le fichier configuration.php et donner lui les droits 666.
    + Donner les droits 777 sur le répertoire cache.
    + Donner les droits 777 sur le répertoire logs et 666 sur tous ses fichiers.
    + Donner les droits 777 sur le répertoire images
    + Donner les droits 777 sur le repertoire templates
    + Donner les droits 777 sur components et administrator/components

Procédure d'installation
::::::::::::::::::::::::
    + Suiver la procédure d'installation sur l'URL hhtp://host/administrator .
    + Renommer le dossiers installation par installation_rep (par exemple).

Accéder au site
:::::::::::::::
    + http://host
    + http://host/administrator (login : root, mot de passe définit à l'installtion)

Template
========
Les templates sont stocké dans le répertoire templates, voici la liste des répertoires et des fichiers obligatoires :
    + <nom_template>    
    + <nom_template>/css
    + <nom_template>/images
    + <nom_template>/index.php
    + <nom_template>/template_thumbnail.png (image réduite du template au format 200x150)
    + <nom_template>/templateDetails.xml (destiné à l'installateur de template)
    + <nom_template>/params.ini


index.php
:::::::::
La structure de base doit être un fichier xhtml 1.0 transitional, la découpe des zones est libres et peut-être définit au moyen de div ou de table.


css/<nom_css>.css
:::::::::::::::::
Contient les règles de style pour le site, le fichier css est un fichier css classique.

templateDetails.xml
::::::::::::::::::: ::
    <install version="1.5" type="template">
        <name>{nom_template}</name>
        <version>1.0</version>
        <creationDate>25/01/2009</creationDate>
        <author>jhe</author>
        <copyright></copyright>
        <authorEmail>jhe@stage.ebusiness.be</autorEmail>
        <authorUrl>http://eBusiness.be</authorUrl>
        <files>
            <filename>index.php</filename>
            <filename>templateDetails.xml</filename>
            <filename>template_thumbnail.png</filename>
            <filename>css/blueprint/screen.css</filename> 
            <filename>css/mhp.css</filename> 
            <folder>images</folder>   
        </files>
        <positions>
		    <position>top</position>
		    <position>left</position>
		    <position>component</position>
		    <position>footer</position>
	    </positions>
    </install>

params.ini
::::::::::
Contient éventuellement des paramètres

JURI
====
Manipule l'url du site
getInstance() (static) : crée un objet
getHost : Renvoie l'ip ou le nom dns du site.
tostring()  : renvoie l'url complète

exemple
::::::: ::
    
    // Connaitre url complète du site
    $url =& JURI::getInstance();
    echo 'Request URI is ' . $url->toString() . "\n";

    // Connaitre l'ip du site
    $url =& JURI::getInstance();
    echo $url->toHost() . "\n";

Truc et astuces
===============
Changer le titre du site
:::::::::::::::::::::::: ::

    $document =& JFactory::getDocument();
    $document->setTitle("Nouveau titre");



