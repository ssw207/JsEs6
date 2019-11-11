/**
 * json으로 응답을 받고
 * js object로 변경한후에 어떠한 데이터 처리 조작을 한 후에 dom에 추가
 * 데이터 + html문자읠 결합이 필요하기 때문에 템플릿 사용
 */

 const data = [
   {
     name : 'coffe-bean',
     order : true,
     items : ['ameriano', 'milk', 'green-tea']
   },
   {
     name : 'starbucks',
     order : false
   }
  ]

  function fn (tags, name, items) {
    console.log(tags);
  }

  //강의와 다르게 실행되지 않음
  // const tp = fn'<div>${data[0].name}</div>';
  // console.log(tp);

