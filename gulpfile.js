var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');

// === Define tasks after requiring dependencies
function style(){
    // Path where sass files are stored
    return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
}

// === Automating tasks
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('scss/*.scss', style)
    gulp.watch('*.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.parallel(style, watch));