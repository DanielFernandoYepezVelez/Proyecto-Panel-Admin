const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp.src('./dev/sass/app.scss')
        .pipe(autoprefixer({
            overridebrowsersList: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(gulp.dest('./public/css/'))
}

function watchFiles() {
    gulp.watch('./dev/sass/*.scss', css);
    gulp.watch('./public/index.html');
}

/* Registrar las tareas */
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));