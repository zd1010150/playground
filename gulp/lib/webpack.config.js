var config = require('../config')
var webpack = require('webpack');

var path = require('path')
var glob = require("glob");

var entryFiles = glob.sync("**/main.js", { cwd: config.src });

console.log(entryFiles);

function generateEntries (entryFiles, isProd) {
  return (entryFiles || []).reduce(function(entryObj, entryFile) {
    entryObj[entryFile] = [
      './' + entryFile,
      'webpack-hot-middleware/client?&reload=true'
    ];
    return entryObj;
  }, {});
};

console.log(path.resolve(config.src));

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(config.src),
  entry: generateEntries(entryFiles),
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
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }]
  },
};
