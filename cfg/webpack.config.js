/* global __dirname */

module.exports = (function() {
    var path = require('path');
    var paths = require('./paths.config');

    var entry = {
        zidentifier: './src/index.ts'
    };

    var output = {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', paths.dist)
    };

    var module = {
        rules: [{
            test: /\.ts$/,
            use: ['awesome-typescript-loader']
        }]
    };

    var resolve = {
        extensions: ['.ts', '.js']
    };

    return {
        entry: entry,
        output: output,
        module: module,
        resolve: resolve,
        devtool: 'cheap-module-source-map'
    };
})();
