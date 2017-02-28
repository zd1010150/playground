/**
 * [browserSync 静态服务器]
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
var webpackConfig = require('../lib/webpack.config');
var webpack = require('webpack');

gulp.task('browserSync', function() {
	const compiler = webpack(webpackConfig)
	const server = config.browserSync;
	server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      publicPath: '/'
    }),
    require('webpack-hot-middleware')(compiler)
  ]

	browserSync.init(config.browserSync);
});
