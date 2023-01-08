const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: { 
                minimize: false,
                outputStyle: 'expanded'
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ]
});