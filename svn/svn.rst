==========
Subversion
==========

Cycle de développement itératif
===============================
Modification journalière
::::::::::::::::::::::::
Réalisation d'une tâche bien précise. Par exemple la correction d'un bug, l'ajout d'une fonctionnalité.

Itération
:::::::::
Une itération comprend une série de modifications journalières, regroupées pour atteindre un but, elle fait passer le logiciel d'un état à un autre.

Incrémentation
::::::::::::::
L'incrémentation comprend une série de'itérations, elle correspond à un changement majeur de l'application.

Constitution d'un projet
========================
Le projet doit comporter au minimum 3 dossiers principals qui correspondra à une branche du cycle de évellopement.
Ansi il comportera les dossiers suivants : 

developpement
:::::::::::::
Il représentee les modification journalière, c'est l'état actuel de l'application.

branches
::::::::
Il représente les itérations et les projets temporaires lorsqu'un travail accompli des changements dangereux pour le dossier courant. 
Il comprendra plusieurs sous-dossier nommé suivant les version des itérations ou d'un nom explicite pour un travail donné.

incrémentations
:::::::::::::::
Il contiendra les versions majeurs de l'application, les sous-dossiers contiendra en général un noms sur 3 chiffres (1.0.0).

Subversion
==========

Variable global
:::::::::::::::
SVN_EDITOR : Désigne l'éditeur à utiliser pour écrire le message de log lors d'une synchronisation du projet.

Serveur
:::::::
Pour lancer le serveur utiliser la commande svnserve avec le paramêtre -d, le paramêtre -root="chemin" peut-être passé pour indiquer le répertoire ou ce trouve le repository.

::
    
    svnserve -d
    svnserve -d -r="/home/user1/svn/projet_1"

Gestion des Repositorys
:::::::::::::::::::::::

 + Création du repository :
    Utiliser la commande svnadmin create nom_projet

::
    
    svnadmin create projet_1

Copie local
:::::::::::

    + Récupérer un projet du serveur

::

    svn co svn://localhost/var/svn/projet_1

    + Mettre à jour un projet

::

    svn ci 
    svn ci -m "Message explicatif de la mise à jour"
    svn ci fichier -m "Correction du bug 330"

    + Afficher les différence entre le projet local et distant (la sortie est compatible avec le logiciel patch linux) 

::
    svn diff
    svn diff fichier
    svn diff -r 1

    + Afficher le status du projet local

::
    svn status

    + Mettre à jour le repository local

::

    svn update

    + Ajouter un fichier, un repertoire ou des fichiers et des repertoires au repository local

::

    svn add fichier

    + Ajouter un fichier, un repertoire ou des fichiers et des repertoires au repository distant

::

    svn import fichier

    + supprimer un fichier du repository local

::

    svn delete fichier
    svn copy fichier
    svn move fichier

    + revenir en arrierre

::

    svn revert fichier
    svn revert

    + voir le log

::

    svn log
    svn log -r1:2

    + Voir les propriétés d'un repository local

::

    svn info

    + visulaiser un fichier sur le serveur

::

    svn cat fichier

    + visualiser la liste des fichiers sur le serveur

::

    svn list

Toutes ces commandes peuvent être éxécuter avec un numéro de révision svn commande -r num_revision.
Pour travailler avec deux revisions particulières utiliser svn commande -r rev:rev2

Gestion du repository
=====================

Creation des fichiers de bases
::::::::::::::::::::::::::::::

::

    svn mkdir developpement
    svn mkdir branches
    svn mkdir finales

Cration d'une nouvelle branche
::::::::::::::::::::::::::::::

::

    svn copy svn://localhost/path_serveur_svn/developpement svn://localhost/path_serveur_svn/branches/0.0 -m "Creation d'une branche sur le projet"

Mettre à jour une copie avec une autre
::::::::::::::::::::::::::::::::::::::

::

    cd branches/0.1
    svn merge svn://localhost/path_serveur_svn/developpement
    svn ci -m "Mise à jour de la branche avec la version de développement"

Supprimer une version
:::::::::::::::::::::
    
::

    svn delete svn://localhost/path_serveur_svn/branches/0.0 -m "Suppression de la version 0.0"

Se déplacer dans un repository
::::::::::::::::::::::::::::::

::

    svn switch svn://svn://localhost/path_serveur_svn/branches/0.0  # mettre comme repertoire de travail la branche 0.0
