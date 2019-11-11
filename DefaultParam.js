// 변수의 초기값을 세팅
function sum(v, s=1) {
  return v * s;
}

console.log(sum(3,10));

//
function sum2(v, s={value:1}) {
  return v * s.value;
}


console.log(sum2(3,{value:3})); //9 : 값을 전달할때는 전달한 값을 사용
console.log(sum2(3)); //3
console.log(sum2(3,{value:0})); //0

