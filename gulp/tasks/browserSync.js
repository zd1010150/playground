/**
 * [browserSync 静态服务器]
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config');
const webpackConfig = require('../lib/webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

gulp.task('browserSync', () => {
  const compiler = webpack(webpackConfig);
  const server = config.browserSync;
  server.middleware = [
    webpackDevMiddleware(compiler, { //
      stats: 'errors-only',
      publicPath: '/',
    }),
    webpackHotMiddleware(compiler),
  ];

  browserSync.init(config.browserSync);
});
