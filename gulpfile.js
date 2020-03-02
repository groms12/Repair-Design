const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename =  require('gulp-rename');
const cssmin =  require('gulp-cssmin');
 
gulp.task('default',  function ( ) {
    return gulp.src('./*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('hello', (done) => {
    console.log('hello, world!');
    done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});