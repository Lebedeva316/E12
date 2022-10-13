// const webpack = require('webpack')
// const StylelintPlugin = require('stylelint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const TerserWebpackPlugin = require('terser-webpack-plugin');
//const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');





module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     contentBase: './src',
     hot: true,
     port: 3001,
     stats: {
        children: false,
        maxModules: 0
            },
   },
    plugins: [
           new MiniCssExtractPlugin(),
          // new CssMinimizerPlugin(), //optimize css
           new TerserWebpackPlugin(),
        //    new HtmlWebPackPlugin({template: path.join(__dirname, 'src/index.pug')})
           new HtmlWebPackPlugin({
          title: 'Development',
        //     //    filename: "index.html"
        }),
    ],
    output: {
      filename: 'main.js',
    },
    //optimization: {
        //minimize: true,
        //minimizer: [new CssMinimizerPlugin({}) , new TerserWebpackPlugin({})],
    //},
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [{
                loader : MiniCssExtractPlugin.loader,
                options : {
                    esModule : true,
                }
            }, 'css-loader'],
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }

    ]
      },
      devtool: 'inline-source-map',
  };
