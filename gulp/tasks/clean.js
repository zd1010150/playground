var gulp = require('gulp');
var del = require('del');
var util = require("gulp-util");
var config = require('../config').clean;

gulp.task('clean', function(cb) {
	del(config.dest).then(function () {
		cb();
	});
});
