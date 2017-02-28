const requireDir = require('require-dir');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', (cb) => {
  gulpSequence('clean', 'static', 'watch', cb);
});
