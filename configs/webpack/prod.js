// production config
const merge = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.jsx',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../public'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      // Webpack < 5 doesn't polyfill node core modules anymore
      path: 'path-browserify',
    },
  },
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
