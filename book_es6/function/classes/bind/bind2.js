class MyClass2 {
  constructor() {
    this.arr = [1,2,3]; // this === MyClass
    this.msg = '호출';
    this.callback2 = this.callback2.bind(this);
  };

  myMethodCallMap() {
    // 화살표 함수사용x , map함수의 실행 문맥으로 변경한다.
    const callback = function(v) { 
      return v + this.msg;
    }
    
    const msgArr = this.arr.map(callback.bind(this)); // 함수.bind(객체) : 함수의 this는 bind의 인자를 가르킨다.
    console.log('myMethodCallMap',msgArr);
  }

  callback2 = function(v) { 
    return v + this.msg;
  }

  myMethodCallMap2() {
    // 화살표 함수사용x , map함수의 실행 문맥으로 변경한다.
    const msgArr = this.arr.map(this.callback2); // 함수.bind(객체) : 함수의 this는 bind의 인자를 가르킨다.
    console.log('myMethodCallMap2',msgArr);
  }
}

// const c = new MyClass();
// c.myMethodCallMap();
// c.myMethodCallMap2();

export default MyClass2;