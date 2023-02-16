const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./main.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  mode: process.env.NODE_ENV,
  // type: module,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'sass-loader',
      //     'css-loader',
      //   ],
      // },
    ],
  },
};
