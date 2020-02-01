class MyClass {
  constructor() {
    this.arr = [1,2,3]; // this === MyClass
    this.msg = '호출';
  };

  myMethod() {
    return this.msg; // this === MyClass
  }

  myMethodCallMap() {
    // 화살표함수는 문맥을 바꾸지 않는다.
    const msgArr = this.arr.map(v => { 
      v + this.msg // this === MyClass
    }); // [ '1호출', '2호출', '3호출' ]

    // 화살표 함수사용x , map함수의 실행 문맥으로 변경한다.
    const msgArr2 = this.arr.map(function(v) { 
      return v + this.msg; // Cannot read property 'msg' of undefined
    }); 
  }
}

//const c = new MyClass();
//c.myMethod();
//c.myMethodCallMap();

export default MyClass;
