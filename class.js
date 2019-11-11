//Es5
function Helth(name) {
  this.name = name;
}

Helth.prototype.showHelth = function() {
  console.log(this.name);
}

var helth = new Helth("cront"); // new 시 class 내부의 this 는 생성된 helth객체를 나타냄
helth.showHelth();

//Es6 
class Helth2 {
  constructor(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
  }

  showHelth() {
    console.log("안녕하세요 " + this.name);
  }
}

const h2 = new Helth2("crong"); //내부적으로 함수로 처리됨. prototype에 저장
h2.showHelth();
console.log(toString.call(Helth2)); // 타입이 functino임