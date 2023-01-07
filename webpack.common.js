const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/index.js'
  },
  plugins: [
    new htmlWebpackPlugin({ 
        title: 'Quest Proto',
        template: path.resolve('./src/index.html')
  })],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
