# Créer nouveau projet

# Structure
E:mon-projet
|   .bowerrc
|   bower.json
|   gulpfile.js
|   package.json
|   
+---app
|   |   index.html
|   |
|   +---bower_components
|   |
|   +---images
|   |
|   +---scripts
|   |   |   main.js
|   |   |
|   |   ---lib
|   |
|   ---styles
|           main.css
|           main.scss
|           _variables.scss
|
---node_modules

# Installer les outils
```
npm init
npm install --save-dev gulp
npm install gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-concat gulp-uglify gulp-util gulp-filesize gulp-connect gulp-cssnano --save-dev
npm install -g bower
```

# installer une version particulière d'un plugin jquery, css, ...
```
bower install knacss#2.9.1
```

# créer le fichier gulpfile.js à la racine du projet.