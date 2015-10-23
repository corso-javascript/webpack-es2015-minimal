var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'output.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['','.js'],
    root: path.join(__dirname, './src'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules|lib/,
      }
    ],
  },
  devtool: 'inline-source-map'
};
