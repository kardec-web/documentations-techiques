Changer une chaine de caractère dans plusieurs fichier
find . -name "*.php" -print | xargs sed -i 's/..\/images\/page/..\/images\/page/g'
