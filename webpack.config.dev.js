const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'FUI',
            template: 'index.html'
        })
    ],
})