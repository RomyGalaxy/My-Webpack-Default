const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development', // режим разработки
    entry: [__dirname + '/src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/app.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Главная страница',
            template: path.resolve(__dirname, './src/index.html'), // Входной файл
            filename: 'index.html', // выходной файл
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/main.css',
        })
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
                test: /\.(?:eot|ttf|woff)$/i,
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
                loader: 'html-loader'
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
        ]
    },
}