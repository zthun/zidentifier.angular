/* global __dirname */

module.exports = (function() {
  var path = require('path');
  var paths = require('./paths.config');

  return {
    mode: 'development',
    entry: {
      zidentifier: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '..', paths.umd),
      libraryTarget: 'umd',
      library: 'zidentifier'
    },
    externals: {
      '@angular/core': {
        commonjs: '@angular/core',
        commonjs2: '@angular/core',
        amd: '@angular/core',
        root: ['ng', 'core']
      },
      'core-js': 'core'
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      }]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'cheap-module-source-map'
  };
})();
