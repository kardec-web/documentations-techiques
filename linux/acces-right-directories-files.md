chown jeremy:http * -R
find -name '*' -type d -exec chmod 2750 {} \; 
find . -type f -exec chmod 2640 {} \;
# le 2 spécifie que http ecrit les fichiers dans les même droits que jeremy

<dans les fichiers en écritures ecrire:
sudo find -name '*' -type d -exec chmod 2770 {} \;
sudo find . -type f -exec chmod 2660 {} \;
