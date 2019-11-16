/**
 * Prox interception 기능
 * 객체의 요청을 인터셉터해서 추가적인 작업을 수행.
 */
const myObj = {name:'crong'};

/**
 * const proxy = new Proxy(원본객체, {실행되는 함수}); 
 */
const proxy = new Proxy(myObj, {
  /**
   * @param {*} target 원본객체 ex) myObj
   * @param {*} property 접근한 원본객체의 속성
   * @param {*} receiver 프록시 객체 자체
   */
  get : function(target, property, receiver) {
    console.log('get실행', target, property);
    return target[property]; // 원본객체의 접근한속성을 리턴
  },
  /**
   * 
   * @param {*} target 원본객체
   * @param {*} property 접근한 속성 
   * @param {*} value 입력값
   */
  set : function(target, property, value) {
    console.log('set실행', target, property, value);
    target[property] = value; // 원본객체의 접근한속성에 입력한값을 넣는다.
  },
}); 

// proxy.name = 'test' // new Proxy(myObj, { 이위치에 선언한 set 실행}
// console.log(proxy.name); // new Proxy(myObj, { 이위치에 선언한 get 실행}

/**
 * 프록시를 활용한 로깅코드
 */
const changeCounter = { name : 'cnt', changeValue : 0 }

const proxyChangeCounter = new Proxy(changeCounter, { // 원본객체를 직접 선언하면 원본객체에 접근불가
  get : (target, property, receiver) => {
    console.log('get실행', target, property);
    
    /**
     * 객체에서 값을 꺼내는 방법
     * 1. return target[property];
     * 2. return Reflect.get( target, property ); 객체안의 속성 값을 호출
     */
    return (property in target) ? target[property] : '값이 없습니다.'; //property가 target안에 없으면 값이 없습니다 출력
  },
  set : (target, property, value) => {
    console.log('set실행', target, property, value );
    target['changeValue']++;
    target[property] = value;
  }
});

proxyChangeCounter.name = 'hi'; // 변경
proxyChangeCounter.name = 'hi2'; // 변경
console.log('변경횟수', proxyChangeCounter.changeValue); // 2
changeCounter.name = 'hi3'; // 원본객체로 직접접근해서 프록시 객체의 set 함수가 실행되지 않음
changeCounter.name = 'hi4'; // 변경
console.log('변경횟수', proxyChangeCounter.changeValue); // 2

console.log(proxyChangeCounter.kind); // 값이 없습니다.

