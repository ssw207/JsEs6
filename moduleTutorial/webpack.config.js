const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: './app.js', // index파일의 모든 import를 찾아옴
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname), // 해당위치의 js의 모든 파일을 babel로 처리
        exclude: /(node_modules)|(dist)/, // 제외
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
