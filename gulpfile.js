var del = require('del');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var tsd = require('gulp-tsd');
var zip = require('gulp-zip');

gulp.task('clean', function (callback) {
	del(['build/**'], callback);
});
 
gulp.task('copy', function () {
	return gulp.src('src/manifest.json')
		.pipe(gulp.dest('build'));
});

gulp.task('tsd', function (callback) {
	tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});
 
gulp.task('scripts', ['tsd'], function () {
	return gulp.src('src/**/*.ts')
		.pipe(ts({
			module: 'commonjs'
		}))
		.pipe(gulp.dest('build/src'));
});

gulp.task('zip', ['scripts', 'copy'], function () {
	var manifest = require('./src/manifest'),
		distFileName = manifest.name + ' v' + manifest.version + '.zip',
		mapFileName = manifest.name + ' v' + manifest.version + '-maps.zip';

	gulp.src('build/src/**/*.map')
		.pipe(zip(mapFileName))
		.pipe(gulp.dest('dist'));

	return gulp.src(['build/**', '!build/src/**/*.map'])
		.pipe(zip(distFileName))
		.pipe(gulp.dest('dist'));
});

gulp.task('test-compile', ['scripts'], function () {
	return gulp.src('test/**/*.ts')
		.pipe(ts({
			module: 'commonjs'
		}))
		.pipe(gulp.dest('build/test'));
});

gulp.task('test', ['test-compile'], function () {
	return gulp.src('build/test/**/*.js')
		.pipe(mocha());
});
 
gulp.task('default', ['clean'], function () {
    gulp.start('zip');
});