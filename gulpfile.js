const gulp        = require('gulp')
const browserSync = require('browser-sync').create()
const sass        = require('gulp-sass')
const webpack     = require('webpack-stream')
const concat      = require('gulp-concat')
const htmlmin     = require('gulp-htmlmin')
const cleanCSS    = require('gulp-clean-css')
const minify      = require('gulp-minify')
const uglify      = require('gulp-uglify') // !!!!!!!!!! neds to be tested more. Apparently does the same as minify(?)


// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['./app/styles/*.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream())
})

// ES6 to browser compatible javascript
// Concatenate JavaScript
gulp.task('scripts', function() {
  return gulp.src('./app/scripts/*.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: [''],
        ignoreFiles: ['']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
})

// Copy any html from /app to /dist
gulp.task('html', function() {
	gulp.src('./app/*.html')
    // .pipe(concat('index.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'))
});

// Watch Sass & Serve
gulp.task('serve', ['html', 'sass', 'scripts'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch(['app/styles/*.sass'], ['sass']);
    gulp.watch(['app/scripts/*.js'], ['scripts']);
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(["app/*.html"]).on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
