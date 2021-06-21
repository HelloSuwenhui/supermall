const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        port: 9200,
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
};