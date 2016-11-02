====
Xorg
====

Definir inittab pour démarrer en runlevel 5
::::::::::::::::::::::::::::::::::::::::::: ::
    id:5:initdefault:
    
Démarrer avec gdm
::::::::::::::::: ::
    x:5:respawn:/usr/sbin/gdm -nodaemon
    
Démarrer sur une session utilisateur
:::::::::::::::::::::::::::::::::::: ::
    x:5:once:/bin/su jeremy -l -c "/bin/bash --login -c startx >/dev/null 2>&1"
    
Au lancement de start démarrer sous gnome 
:::::::::::::::::::::::::::::::::::::::::
Ajouter dans le fichier ~/.xinitrc la ligne ::
    exec gnome-session
    
Démarrer un deuxième gestionnaire graphique
::::::::::::::::::::::::::::::::::::::::::: ::
    X :1
    startx -- :1
