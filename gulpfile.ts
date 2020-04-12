import browserify = require('browserify');
import del = require('del');
import gulp = require('gulp');
import mocha = require('gulp-mocha');
import source = require('vinyl-source-stream');
import ts = require('gulp-typescript');
var zip = require('gulp-zip');

gulp.task('clean', (callback) => {
    del(['build/**'], callback);
});

gulp.task('copy', () => {
    return gulp.src('src/manifest.json')
        .pipe(gulp.dest('build/dest'));
});

gulp.task('typescript', () => {
    const tsProject = ts.createProject('tsconfig.json');
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('build/src'));
});

gulp.task('scripts', ['typescript'], () => {
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

gulp.task('test-compile', ['typescript'], () => {
    return gulp.src('test/**/*.ts')
        .pipe(ts({
            module: 'commonjs'
        }))
        .pipe(gulp.dest('build/test'));
});

gulp.task('test', ['test-compile'], () => {
    return gulp.src('build/test/**/*.js')
        .pipe(mocha());
});

gulp.task('default', ['zip']);
