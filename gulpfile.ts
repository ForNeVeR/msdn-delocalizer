/// <reference path="typings/tsd.d.ts"/>

import del = require('del');
import gulp = require('gulp');
import mocha = require('gulp-mocha');
import ts = require('gulp-typescript');
import tsd = require('gulp-tsd');
var zip = require('gulp-zip');

gulp.task('clean', (callback) => {
    del(['build/**'], callback);
});
 
gulp.task('copy', () => {
    return gulp.src('src/manifest.json')
        .pipe(gulp.dest('build'));
});

gulp.task('tsd', (callback) => {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});
 
gulp.task('scripts', ['tsd'], () => {
    return gulp.src('src/**//*.ts')
        .pipe(ts({
            module: 'commonjs'
        }))
        .pipe(gulp.dest('build/src'));
});

gulp.task('zip', ['scripts', 'copy'], () => {
    var manifest = require('./src/manifest'),
        distFileName = manifest.name + ' v' + manifest.version + '.zip',
        mapFileName = manifest.name + ' v' + manifest.version + '-maps.zip';

    gulp.src('build/src/**//*.map')
        .pipe(zip(mapFileName))
        .pipe(gulp.dest('dist'));

    return gulp.src(['build/**', '!build/src/**//*.map'])
        .pipe(zip(distFileName))
        .pipe(gulp.dest('dist'));
});

gulp.task('test-compile', ['scripts'], () => {
    return gulp.src('test/**//*.ts')
        .pipe(ts({
            module: 'commonjs'
        }))
        .pipe(gulp.dest('build/test'));
});

gulp.task('test', ['test-compile'], () => {
    return gulp.src('build/test/**//*.js')
        .pipe(mocha());
});
 
gulp.task('default', ['clean', 'zip']);
