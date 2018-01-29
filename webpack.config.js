const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  entry: './src/home.js',
  output: {
    path: resolveApp('./build'),
    filename: 'home.js',
    library: 'Home'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },
        {
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
