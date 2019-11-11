// 프로토타입 매서드 선언
const healthObj = {
  showHelath : function() {
    console.log("오늘 운동시간 : " +  this.healthTime);
  }
}

// 일반 obj 생성
const myHelth = Object.create(healthObj); // obj생성하고 프로토 타입 매서드 주입
myHelth.name = "crong"; // 값할당
myHelth.lastTime = "11.20";

console.log(myHelth);

// obj assign 매서드 사용
const myHelth2 = Object.assign(Object.create(healthObj), {  // obj생성하고 프로토 타입 매서드 주입, 값할당
  name : "cring",
  lastTime : "11:20"
}); 

console.log(myHelth2);



//활용 - immutable object 생성시 유용
const mh = {
  name : "crong",
  lastTime : "12:00"
}

 //  기존객체의 값을 새로 할당.
  const mh2 = Object.assign({}, mh , {
    name :"crong2", lastTime : "13:00", age : 99
  }); // 프로토타입함수, 원본객체, 새로할당된 값

console.log("my health is ", mh2);
console.log(mh === mh2); // 카피해서 새로운 객체를 생성하므로 원본객체와 같지않다.
