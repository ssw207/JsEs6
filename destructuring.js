let data = ['crong','swsong','kimwoo'];
let [jisu,,sung] = data; // data배열의 0번째를 jisu에 할당, 2번째를 sung에 할당

let obj = {
  name : 'swsong',
  addr : '서울',
  age : 10
}

//obj에 있는 name을 myName, addr을 myAddr에 새로 매핑
let {name:myName,addr:myAddr} = obj;
console.log(myName,myAddr);

var news = [
  {
    title:'네이버',
    url:'네이버url',
    newsList:'네이버newsList';
  },
  {
    title:'다음',
    url:'다음url',
    newsList:'다음newsList';
  }
]

//1번방법
let [,daum] = news;
let {title,url} = daum;
console.log(title,url);

//2번방법
let [, {title,url}] = news; // news의 2번배열에서 title,과 url을 할당
console.log(title,url);

//3번방법
function getNewsList([,{newsList}]) { // 전달받은 news를 destructuring
  console.log(newsList);
}

getNewsList(news); //news객체를 매개번수로 전달

//이벤트 객체의 target, type을 destructuring
document.querySelector('div').addEventListener("click",function({target,type}){
  console.log(type,target.tagName);
});