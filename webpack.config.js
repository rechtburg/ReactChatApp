const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/main.tsx"
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Loading...",
      template: "./src/index.html",
      hash: true,
      // config
    })
  ],
  devServer: {
    port: 4000,
    historyApiFallBack: true,
    hot: true,
    open: true,
    overlay: true
  },
};
