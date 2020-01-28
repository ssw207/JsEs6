# 요구사항

1. 블로그보기 버튼 클릭시 블로그들의 리스트가 보여진다
1. 각 블로그는 찜하기 버튼이 있으며 클릭시 하단의 찜목록에 제목이 추가된다.
1. 찜한 블로그는 '좋아요' -> '싫어요' 로 글시가 바뀐다.
1. '싫어요' 클릭시 반대로 동작
1. 블로그 클릭시 블로그페이지로 이동한다.

# 의존성

1. 웹팩 , 바벨

- es6문법을 사용하기 위함

```
npm i --save-dev webpack webpack-cli webpack-dev-server
npm i --save-dev @babel/cli @babel/core @babel/preset-env babel-loader @babel/polyfill
```

# 세팅

## 바벨, 웹팩

### package.json

웹팩 빌드관련 스크립트 설정

```
  (...)
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "server": "webpack-dev-server --inline"
  },
```

### webpack.config.js

```
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
```

# 패키지 구조

- data
  - 블로그 데이터 json 파일
- dist
  - 번들링된 파일
- src
  - 웹팩, 바벨로 번들리하기 전 파일

# 참조

인프런 Es6 강좌
https://www.inflearn.com/course/es6-%EA%B0%95%EC%A2%8C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard
