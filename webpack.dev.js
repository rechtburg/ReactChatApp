const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  devServer: {
    contentBase: 'dist',
    port: 4000,
    historyApiFallback: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}
