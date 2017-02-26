/**
 * [browserSync 静态服务器]
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').browserSync;

gulp.task('browserSync', function() {
	browserSync({
		port: config.port,
		open: false,
		server: {
			baseDir: config.server.baseDir,
		}
	});
});
