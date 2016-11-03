var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    size = require('gulp-filesize');

// Paths
var bower = './bower_components';

gulp.task('webserver', function() {
  connect.server({
    livereload: false,
    root: ['.', 'app']
  });
});

// css task
gulp.task('styles', function () {
    return gulp.src('app/static/css/styles.scss')
    // return gulp.src('app/static/css/styles-smartphones.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename('styles.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('app/static/css/'))
    .pipe(size())
    .on('end', function(){ 
        gutil.log(gutil.colors.yellow('♠ La tâche CSS est terminée.'));
    });
});



// javascript task
gulp.task('scripts', function() {
    return gulp.src([bower + '/jquery/dist/jquery.js', bower + '/bootstrap-sass/assets/javascripts/bootstrap.js','app/static/js/lib/*.js'])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/static/js/'))
    .pipe(size())
    .on('end', function(){ 
        gutil.log(gutil.colors.yellow('♠ La tâche JavaScript est terminée.'));
    });
});

// default task
gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});
