const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './app.js',
    vendor: ['jquery']
  },
  // entry: './app.js', //file path
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js', //file name
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {presets: ['env']}
        }
      },
      // {
      //  test: /\.css$/,
      //  use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.s?css$/,
        use: textPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new htmlPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}), //для модулей которые используется в нескольких модулях
    new textPlugin({
      filename: 'style.css'
    })
  ]
};