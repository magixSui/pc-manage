const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        proxy: {
            '/api': {
                target: 'http://localhost:3000/community_manage/',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        },
        
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});