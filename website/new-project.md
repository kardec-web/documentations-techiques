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
```

# créer le fichier gulpfile.js à la racine du projet.