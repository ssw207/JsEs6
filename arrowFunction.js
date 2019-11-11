// es5
setTimeout(function() {
  console.log("settimeout");
}, 1000);

// es6
setTimeout( ()=> {
  console.log("settimeout");
}, 1000);

//es5 - 인자의 함수가 길다는 문제가 있음
let newArr = [1,2,3,4,5].map(function(v,i,o){
  return v * 2;
});

//es6 - 파라미터 생략
let newArr2 = [1,2,3,4,5].map( (v)=>{
  return v * 2;
});

//es6 - 파라미터 생략, 리턴생력
let newArr3 = [1,2,3,4,5].map( (v)=> v * 2 );

console.log(newArr);
console.log(newArr2);
console.log(newArr3);

//es5
const myObj = {
  runTimeout() {
    setTimeout(function(){
      //console.log(this === window); // window 객체를 찾질 못함  (true)
      this.printData();
    }.bind(this), 200); // this는 현재 window를 가르킴 bind를 통해 this가 myobj를 가르킬수 있도록함
  },

  printData() {
    console.log("hi");
  }
}
//myObj.runTimeout();

//es6
const myObj2 = {
  runTimeout() {
    setTimeout( () => {
      //console.log(this === window); //  false 
      this.printData(); // arrow는 contex를 유지함
    }, 200); 
  },

  printData() {
    console.log("hi");
  }
}
myObj2.runTimeout();
 