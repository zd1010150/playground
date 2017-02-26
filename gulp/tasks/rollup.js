var gulp = require('gulp');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var browserSync = require('browser-sync');
var glob = require('glob');
var path = require('path');
var merge = require('merge-stream');
var config = require('../config');

var cache = {};

gulp.task('rollup', function() {
  return merge(glob.sync(config.rollup.src).map(function(entry) {
    return rollup({
      entry: entry,
      cache: cache[entry],
      sourceMap: true,
      plugins: [
        babel({
          babelrc: false,
          presets: [["es2015", { "modules": false }]],
          plugins: ['external-helpers'],
          externalHelpers: true,
        }),
        nodeResolve({ browser: true, jsnext: true, main: true, module: true }),
        commonjs({
          include: ['node_modules/**', 'src/**'],
        }),
      ],
      format: 'umd'
    })
    .on('bundle', function(bundle) {
      cache[entry] = bundle;
    })
    .pipe(source(path.resolve(entry), path.resolve(config.src)));
  }))
  .pipe(gulp.dest(config.rollup.dest))
  .pipe(browserSync.stream());
});
