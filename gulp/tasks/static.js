const gulp = require('gulp');
const changed = require('gulp-changed');
const browserSync = require('browser-sync');
const config = require('../config').static;

gulp.task('static', () => (
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream())
));
