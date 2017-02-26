var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.static.src, ['static']);
  gulp.watch(config.rollup.src, ['rollup']);
});
