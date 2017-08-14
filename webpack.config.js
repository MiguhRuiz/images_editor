const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],
    target: 'electron'
}

module.exports = config