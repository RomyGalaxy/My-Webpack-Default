const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'none', // режим разработки
    //mode: 'production', // режим разработки
    entry: [__dirname + '/src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/app.bundle.js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Главная страница',
            template: path.resolve(__dirname, './src/index.html'), // Входной файл
            filename: 'index.html', // выходной файл
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/main.min.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext]',
                },
            },
            {
                test: /\.(?:eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                  MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ],
    },
}