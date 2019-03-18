const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const less = require('gulp-less');
const sourcemap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const fileInclude = require('gulp-file-include');


gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });

    watch('./app/less/**/*.less').on('change', gulp.series('styles'));
    watch('./app/html/**/*.html').on('change', gulp.series('html'));
});

gulp.task('styles', () => {
    return gulp.src('./app/less/**/main.less')
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: 'styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(sourcemap.write())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());   
});

gulp.task('html', () => {
    return gulp.src('./app/html/*.html')
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: 'HTML include',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileInclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./app/'));
});

gulp.task('default', gulp.series('server', gulp.parallel('styles', 'html')));