const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        index: './src/JS/index.js',
        about: './src/JS/about.js',
        shared: './src/JS/shared.js',
        list: './src/JS/list.js',
        forecast: './src/JS/forecast.js'
    },

    output: {

        path: path.resolve(__dirname, 'build'),

        filename: '[name].js'

    },

    module: {

        rules: [

            {

                test: /\.(sa|sc|c)ss$/,

                use: [

                    {

                        loader: 'css-hot-loader',

                    },

                    {

                        loader: MiniCssExtractPlugin.loader,

                    },

                    'css-loader',

                    'sass-loader',

                ],

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }


        ]

    },

    plugins: [

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({

            filename: 'style.css'

        }),

        new HtmlWebpackPlugin({

            filename: 'index.html',

            template: '!!ejs-webpack-loader!./index.ejs',

            chunks: ['shared', 'index']

        }),

        new HtmlWebpackPlugin({

            filename: 'about.html',

            template: '!!ejs-webpack-loader!./about.ejs',

            chunks: ['shared', 'about']

        }),

        new HtmlWebpackPlugin({

            filename: 'list.html',

            template: '!!ejs-webpack-loader!./list.ejs',

            chunks: ['shared', 'list']

        }),

        new HtmlWebpackPlugin({

            filename: 'forecast.html',

            template: '!!ejs-webpack-loader!./forecast.ejs',

            chunks: ['shared', 'forecast']

        })


    ],

    devServer: {

        contentBase: path.resolve(__dirname, 'build'),

        compress: true,

        writeToDisk: true,

        watchContentBase: true,

        port: 9000,

    }

};