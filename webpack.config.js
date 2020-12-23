/*
 * @Author: 枭磔
 * @Date: 2020-12-23 15:00:53
 * @LastEditors: 枭磔
 * @LastEditTime: 2020-12-23 21:18:22
 * @Description:  ∂
 * @copyright: Copyright @ 2019 Hangzhou DtDream Technology Co.,Ltd. All rights reserved.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'xxx',
      template: path.resolve(__dirname, 'index.html'),
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader", //npm install --save-dev babel-loader babel-core
      exclude: path.resolve(__dirname, './node_modules/'),
      options: {
        "presets": ["es2015"]
      }, //npm install --save-dev babel-preset-env
      include: path.resolve(__dirname) + './src'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          } //这里是处理@import引入进来的文件  如果是@import的是less文件，那么不用加
        },
        {
          loader: 'postcss-loader' //
        }
      ]
    }, {
      test: /\.less$/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader'
        },
        {
          loader: 'postcss-loader'
        } //自动补齐less文件里面的需要加浏览器前缀的
      ]
    }]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: ""
};
