var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');


gulp.task('hello', async function() {
    console.log('Hello!!!!');
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('style_min', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('style_main.min.css'))
        .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});