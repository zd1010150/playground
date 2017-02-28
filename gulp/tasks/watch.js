const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', ['browserSync'], () => {
  gulp.watch(config.static.src, ['static']);
});
