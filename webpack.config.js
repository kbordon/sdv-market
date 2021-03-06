const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        resolve(__dirname, "src", "index.jsx")
    ],

    output: {
        filename: 'app.bundle.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: '#source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFiles: "./.eslintrc.json"
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["env", {"modules": false}],
                        "react"
                    ],
                    plugins: [
                        "react-hot-loader/babel",
                        "styled-jsx/babel"
                    ]
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'template.ejs',
            appMountId: 'react-app-root',
            title: 'Star Dew Valley Market',
            filename: resolve(__dirname, "build", "index.html")
            // ,
            // inject: false
        })
    ]
};