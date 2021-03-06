const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 읽을 파일경로
    compress: true,
    port: 9000
  },
  mode: "development", // 개발자모드, 최적화가 실행되지 않는다.
  entry: {
    bundle: './src/app.js', // 이 파일의 모듈들이 하나로 합쳐진다
  },
  output: {
    filename: '[name].js', // entry의 key로 파일명이 생성된다
    path: path.resolve(__dirname, 'dist'), // 생성된 파일경로 '현재패키지폴더/dist
    publicPath: "/" // 서버상의 파일경로
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
                  targets: { node: 'current' }, // 노드일 경우만
                  modules: 'false' // :false 사용시 트리 쉐이킹 사용 (import되지 않은 exprot를 정리하는 기능)
                }
              ],
            ],
          },
        }
      }
    ],
  },
  optimization: {},
  /*
  - resolve : 웹팩이 알아서 경로, 확장자를 처리할수 있게 도와주는 옵션
    - modules : node_modules를 넣어야 디렉토리의 모듈들을 인식
    - extensions : 여기넣은 확장자들은 웹팩에서 알아서 처리하기 때문에 파일에 따로 입력할 필요가 없음.
  */
  resolve: {
    modules: ["node_modules"], 
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};