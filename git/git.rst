===
Git
===

Configuration
=============
General
::::::: 
::

    $ git config --global user.name "Scott Chacon"
    $ git config --global user.email "schacon@gmail.com"
    
Projet
::::::
 ::
 
    $ git config user.name "Scott Chacon"
    $ git config user.email "schacon@gmail.com"

## Lister les paramètres de configuration
```
git config -l
```

Dépôt
=====
Cloner un dépôt
::::::::::::::: 
::

    git clone git://git.kernel.org/pub/scm/git/git.git

Créer un nouveau dépôt
:::::::::::::::::::::: 
::

    $ cd project
    $ git init
    
git init crée un nouveau dépôt en incorporant les fichiers déjà existant
dans la racine du projet.

## Spécifier le dépôt distant à utiliser
```
git remote add origin/master <adresse du dépôt>
git push --set-upstream origin/master master
```

Ajouter des fichiers ou inclure les modifications faites sur un fichier
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
::

    $ git add file1 file2 file3

Mettre à jour les fichiers modifiés
::::::::::::::::::::::::::::::::::: 
::

    $ git commit -a
    
Accepter les changements
:::::::::::::::::::::::: 
::

    $ git commit
    
Note sur les commits
::::::::::::::::::::
Lors d'un commit une demande de message est faite, par convention la première ligne correpsondant à une courte description
des changements, la deuxieme ligne est une ligne vide, le reste est une description longue des changements.

Résumé des changements
:::::::::::::::::::::: 
::

    $ git status

Branches
========
Créer une branche
::::::::::::::::: 
::

    $ git branch experimental

Créer une branche ajouter le contenu actuel et se positionner dessus
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
::

    $ git checkout -b branche2

Lister les branches
::::::::::::::::::: 
::

    $ git branch

Effacer une branche
::::::::::::::::::: 
::

    $ git branch -d experimental
    
Aller sur une branche
::::::::::::::::::::: 
::

    $ git checkout experimental
    
Fusionner deux branches
::::::::::::::::::::::: 
::

    $ git merge experimental
    
Logs
==== 
::

    $ git log v2.5.. # commits depuis (non-visible depuis) v2.5
    $ git log test..master # commits visibles depuis master mais pas test
    $ git log master..test # commits visibles depuis test mais pas master
    $ git log master...test # commits visibles pour test ou
    # master, mais pas les 2
    $ git log --since="2 weeks ago" # commits des 2 dernières semaines
    $ git log Makefile # commits qui modifient le Makefile
    $ git log fs/ # commits qui modifient les fichiers sous fs/
    $ git log -S'foo()' # commits qui ajoutent ou effacent des données
    # contenant la chaîne 'foo()'
    $ git log --no-merges # ne pas montrer les commits de merge
   
Créer des patches
::::::::::::::::: 
::

    $ git log -p
    
Différences
===========
Entre deux branche
:::::::::::::::::: 
::

    $ git diff master..test
    
Entre les derniers changements et l'index de git
:::::::::::::::::::::::::::::::::::::::::::::::: 
::

    $ git diff
    
Entre les changements actuels et une autre branche
::::::::::::::::::::::::::::::::::::::::::::::::::
::

    $ git diff test

Voir les fichiers modifiés entre deux branche
:::::::::::::::::::::::::::::::::::::::::::::
::
    
    $ git log --stat <branche_a_comparer>..HEAD