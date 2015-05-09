var del = require('del');
var gulp = require('gulp');
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
	return gulp.src(['src/**/*.ts', 'typings/tsd.d.ts'])
		.pipe(ts())
		.pipe(gulp.dest('build/scripts'));
});
 
gulp.task('zip', ['scripts', 'copy'], function () {
	var manifest = require('./src/manifest'),
		distFileName = manifest.name + ' v' + manifest.version + '.zip',
		mapFileName = manifest.name + ' v' + manifest.version + '-maps.zip';

	gulp.src('build/scripts/**/*.map')
		.pipe(zip(mapFileName))
		.pipe(gulp.dest('dist'));

	return gulp.src(['build/**', '!build/scripts/**/*.map'])
		.pipe(zip(distFileName))
		.pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['clean'], function () {
    gulp.start('zip');
});