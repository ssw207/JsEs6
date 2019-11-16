function addMark () {
  //arguments를 배열로 변환
  let newArray = Array.from(arguments); 
  // 배열에서 인자를 하나씩꺼내서 value에 전달 => 연산처리후 결과값을 새로운 배열에 입력
  let newData = newArray.map(function(value) { 
    return value + "1";
  });
  console.log(newData);
  
}
addMark(1,2,3,4,5); // 인자전달
