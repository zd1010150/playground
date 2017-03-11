const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const config = require('../config');

const entryFiles = glob.sync('**/main.js', { cwd: config.src });
const entry = (entryFiles || []).reduce((entryObj, entryFile) => (Object.assign({}, entryObj, {
  [entryFile]: [
    `./${entryFile}`,
    'webpack-hot-middleware/client?&reload=true',
  ],
})), {});
console.log(entry);

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(config.src),
  entry,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(config.dest),
    filename: '[name]',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
};
