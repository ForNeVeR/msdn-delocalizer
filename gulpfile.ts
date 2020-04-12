import browserify = require('browserify');
import del = require('del');
import gulp = require('gulp');
import source = require('vinyl-source-stream');
import ts = require('gulp-typescript');
var zip = require('gulp-zip');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', (callback) => {
    del(['build/**'], callback);
});

gulp.task('copy', () => {
    return gulp.src('src/manifest.json')
        .pipe(gulp.dest('build/dest'));
});

gulp.task('compile', () => {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('build/src'));
});

gulp.task('test-compile', ['compile'], () => {
    return gulp.src('test/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('build/test'));
});

gulp.task('scripts', ['compile', 'test-compile'], () => {
    return browserify({
        entries: [ 'build/src/background.js' ]
    }).bundle().pipe(source('background.js')).pipe(gulp.dest('build/dest/'));
});

gulp.task('zip', ['scripts', 'copy'], () => {
    var manifest = require('./src/manifest'),
        distFileName = manifest.name + ' v' + manifest.version + '.zip';

    return gulp.src(['build/dest/**'])
        .pipe(zip(distFileName))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['zip']);
