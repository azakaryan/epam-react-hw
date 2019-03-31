var path = require('path');
const merge = require('webpack-merge');
const common = require('../webpack.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  mode: 'development',
});