const gulp        = require('gulp')
const shell       = require('gulp-shell')
const browserSync = require('browser-sync').create()
const sass        = require('gulp-sass')
const webpack     = require('webpack-stream');
const babel       = require('gulp-babel')
// const concat      = require('gulp-concat')

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['./app/styles/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream())
})

// ES6 to browser compatible javascript
// Concatenate JavaScript
gulp.task('scripts', function() {
  return gulp.src('./app/scripts/*.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
})



// Watch Sass & Serve
gulp.task('serve', [ 'sass', 'scripts'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch(['app/styles/*.sass'], ['sass']);

    gulp.watch(['app/scripts/*.js'], ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
