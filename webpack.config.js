const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require( 'path' );
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new Dotenv({
            path: './.env',
            safe: true,
            systemvars: true,
            silent: true,
            defaults: false,
        }),
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'src/index.html' ),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
});
