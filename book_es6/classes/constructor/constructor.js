class MyClass { // 클래스명, 관용적으로 첫글자는 대문자로 쓴다.
  constructor(msg, name) { // 생성자, 클래스를 생성시 인지를 받을수 있다.
    console.log('생성자의 this는?', this); // MyClass
    this._msg = msg; // js는 접근제한이 불가능하다. 관용적으로 _가 붙으면 private을 뜻한다.
    this._name = name || '기본 이름';
    /**
     * get와 인수가 동일하면 set으로만 설정가능하다는 에러가 발생한다.
     * TypeError: Cannot set property msg of #<MyClass> which has only a getter
     */
    // this.msg= '인수msg';
  }
  
  /**
   * 만약 인수를 msg로 동일하게 설정시 get,set과 혼돈되어 에러가 발생한다.
   * java의 getter와 동일
   * ex)const myClass = new MyClass('테스트')
   * myClass.msg 호출시 실행
   */
  get msg() {
    console.log(`${this._msg} 출력!!`);
  }

  /**
   * ex)const myClass = new MyClass('테스트')
   * myClass.msg = '변경'; 
   */
  set msg(msg) {
    console.log('set msg 실행',msg);
    this._msg = msg;
  }

  getFullMsg() {
    console.log(this._name + this._msg);
  }
}

const myClass = new MyClass('테스트'); //생성자로 인자를 전달.
myClass.msg = '변경';
myClass.msg;
myClass.getFullMsg();