const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    static: path.join(__dirname, "src"),
    hot: true,
    open: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new htmlWebpackPlugin({
      title: 'questproto',
      template: path.resolve('./src/index.html')
  })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
