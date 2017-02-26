const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'app');

var config = {
    // devtool: 'cheap-module-source-map',
    devtool: 'eval',
    entry: APP_DIR + '/index'
    ,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: APP_DIR
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, { test: /\.less$/, loader: "style!css!less" }]
    }
};


module.exports = config;
