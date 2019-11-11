/**
 * 로또번호 만들기  
 * 1.Set 활용 유일한 값 추출
 * 2.Destructuring으로 getReandomNumber 함수에 변수를 전달 함수를 전달한다. 
 */

 const SETTING = {
   name : "LUCKY LOTTO!",
   count : 6,
   maxNumber : 45
 }

 function getRamdomNumber (maxNumber) {
   //랜덤한 유일한 숫자값을 추출
   let n = 0;
   
   do {
     n =  Math.floor(Math.random() * 100); // 10자리 까지 표현
   } while (maxNumber < n) // 최대숫자보다 크면 다시 뽑는다.
   
   return n;
 }
 
 function getLotto () {
   const lottoSet = new Set();
   while (lottoSet.size != SETTING.count) {
     lottoSet.add(getRamdomNumber(SETTING.maxNumber));
   }
   return [...lottoSet]; // destructuring 으로 set의 데이터를 배열에 할당
 }
 
 let n= getLotto();
 console.log(n);
 
 
 
 
   
