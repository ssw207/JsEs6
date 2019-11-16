const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '/'), // 읽을 파일경로, 개발 서버는 이 경로 아래에 있는 파일만 읽는다.
    compress: true,
    port: 9000
  },
  mode: "development", // 개발자모드, 최적화가 실행되지 않는다.
  entry: {
    bundle: './src/index.js', // 이 파일의 모듈들이 하나로 합쳐진다
  },
  output: {
    filename: '[name].js', // entry의 key로 파일명이 생성된다
    path: path.resolve(__dirname, 'dist'), // 생성된 파일경로 '현재패키지폴더/dist
    publicPath: "/dist" // 이 폴더의 내용이 변경되면 개발서버가 재시작됨
  },
  module: {
    rules: [
      {
        test: /\.js?$/, // js 확장자인경우
        exclude: ['/node_modules'], // 해당위치의 폴더를 제외
        use: {
          loader : 'babel-loader', // 바벨로더 사용
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  targets: { "browsers": ["last 2 versions", ">= 5% in KR"] },
                }
              ],
            ],
          },
        }
      }
    ],
  },
};