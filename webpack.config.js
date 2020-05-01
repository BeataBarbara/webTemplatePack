const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpackplugin");
// const { CleanWebpackPlugin } = require("clean-webpackplugin");
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        watchContentBase: true,
        // plugins: [
        //     new webpack.ProgressPlugin(),
        //     new CleanWebpackPlugin(),
        //     new HtmlWebpackPlugin({ template: './src/index.html' })
        // ]
    },
    module: {
        rules: [{
            test: /\.scss$/, //zamiana css na scss
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"] //dopisanie komponentu
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            }
        },
        {
            test: /\.(html)$/,
            use: ["html-loader"]
        }
        ]
    },
}
