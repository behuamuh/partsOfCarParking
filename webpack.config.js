const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //точка входа
    entry: {
        main: path.resolve(__dirname, 'src', 'main.js'),
        login: path.resolve(__dirname, 'src', 'login.js'),
        operator: path.resolve(__dirname, 'src', 'operator.js'),
    },
    //папка куда собирается
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    //пути к папкам компонентов
    resolve: {
        //что бы не указывать расширение файла
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
        },
    },
    //сама сборка
    module: {
        //правила для сборки
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash].[ext]'
                        },
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
        }),
    ]
}