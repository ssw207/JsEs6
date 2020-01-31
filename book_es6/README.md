# 자바스크립트 코딩의 기술 책 정리 
- 조모건 지은 / 곽헌철 옮김
- 출판사 길벗

# 목차
## 7.유연한 함수를 만들어라
### 테스트하기 쉬운 함수를 작성하라
테스트 하기 쉬운함수는 의존성이 없는 함수다.
의존성이 없다는 것은 간단하게 말하면 함수 내부에 다른 함수가 없다는 것이다.

```
function a() {
  b();
  c();
}
```
a함수는 내부에 b,c함수를 포함하고 있기때문에 a함수를 테스트 하려면 불가피하게 b,c함수도 같이 테스트 할 수 밖에 없게된다.
만약 b,c함수가 서버와 통신해서 데이터를 가져오는 함수이고, 현재 서버에 접속할수 없는상황이라면 a함수를 테스트 할 수 없을것이다.
(혹은 임의의 데이터를 리턴하는 코드로 하드코딩해서 테스트 해야할 것이다.)

이런 문제를 해결하기 위해 의존하는 함수를 인자로 전달하면 결합도가 낮아져 테스트 하기 편리해진다.

```
function a(b,c){
  b();
  c();
}
```
a함수를 테스트할때 b,c함수를 인자로 받기 떄문에 코드 내부를 수정할 필요없이 임시로 임의의 함수를 작성해 전달함으로써 테스트를 쉽게 할 수 있다.

### 화살표 함수로 복잡도를 낮춰라
es6문법을 사용하면 익명함수를 => 함수로 간단하게 표시 가능하다.
1. 전달인자가 단일일 경우 () 생략가능한다 (복수일경우 안됨)
2. 함수의 리턴이 객체({})가 아니고 한줄일경우 return문과 {}를 생략 가능하다.
```
//es5
var f = function (val) {
  return val+1
}

//es6
cont f = val => val+1
```
### 부분 적용 함수로 단일 책임 매개변수를 관리하라
부분 적용함수란 아래처럼 먼저 일부 인수를 전달하고 나머지 인수를 받는 함수롤 반환해서
한번에 전달해야하는 인수를 줄이는 함수이다.

```
const f1 = (param1, param2, param3) => param1 + param2 + param3
const f2 = param1 => (param2, param3) => param1 + param2 + param3
```

위의 f1함수는 3개의 인자를 받고 3개의 인자를 합친값을 리턴하는 함수이다.
f1함수를 부분적용 함수로 바꾼 f2함수는 먼저 param1을 인자로 받고 param2, param3을 인자로 받고 3개의 인자를 합친값을 리턴하는 함수를 리턴한다.

부분적용 함수를 사용했을때 장점은 아래와 같다.
1. 인자간의 의미를 나눌수 있다
1. 동일인자의 반복을 줄일수 있다.

어떤 건물에 전시회와 세미나가 열리는 상황을 가정해보자
동일건물에서 전시회와, 세미나가 열리므로 건물의 관리인과 건물 정보는 전시회,세미나에서 동일하게 사용한다.
건물, 관리인정보를 부분적용함수의 인자로 먼저 전달하면 기초정보 / 변경되는정보의 의미를 나눌수 있으며, 건물, 관리인정보가 중복되는 것을 막을 수 있다.

```
const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};
```
```
// 초기값 세팅 부분 적용함수
const setDefaultInfo = (building, manager) => (event) => {
  return {
    ...building,
    ...manager,
    ...event
  }
}

const eventInfoFactory = setDefaultInfo(building, manager);

// 행사정보
const exhibitInfo = eventInfoFactory(exhibit);
console.log('exhibit정보',exhibitInfo);

// 세미나정보
const programInfo = eventInfoFactory(program);
console.log('program정보',programInfo);

```
### 커링과 배열 메서드를 조합한 부분 적용 합수를 사용하라(작성중)
커링과 부분적용함수의 차이점은 커링은 인수를 하나만 전달받고 인수를 하나만 전달받는 함수를 리턴한다는 것이다.

```
// 부분 적용함수
const f1 = (p1, p2) => (p3) => p1+p2+p3

// 커링
const f2 = p1 => p2 => p3 => p1+p2+p3
```

### 화살표 함수로 문맥 혼동을 피하라(작성중)
화살표 함수 사용시 this는 현재 문맥을 유지한다.

## 8.클래스로 인터페이스를 간결하게 유지하라
### 읽기 쉬운 클래스를 만들어라
1. es6의 클래스문법의 java의 클래스문법과 비슷하지만 실제로는 기존의 es5의 프로토 타입을 쓰기쉽게 바꾼것이다.
1. JS에서 접근제한자를 지원되지 않는다.(관례적으로 필드앞에 _ 를 붙임)
1. 함수앞에 get, set을 붙여서 getter, setter를 유사하게 작성가능(필드명과 동일하면 에러발생)

```
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
```

### 상속으로 메서드를 공유하라
1. 클래스에 상속사용시 prototype 으로 부모-자식이 연결된다.
1. 생성자에 인자를 전달해 속성을 설정할수 있다.
1. 클래스에 매서드를 작성 할 수 있다.
1. 클래스 내부에서 this로 클래스의 함수, 속성에 접근 할 수 있다.
1. 생성자 내부에서 super(인자)로 부모의 생성자를 호출 할 수 있다.
1. 자식의 클래스는 부모의 인자, 함수를 호출 할 수 있다.
1. 자식의 클래스 내부에서 매서드 오버라이딩을 할 수 있다.

```
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }

  isRewardsEligible(user) {
    return user.rewardsEligible && user.active;
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}

export default Coupon;
```

```
import Coupon from './extend';

class FoodCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '30분';
  }

  /* 
  // Coupon의 함수 호출가능
  getPriceText() {
      return `${this.price}원`
    }

    getExpirationMessage() {
      return `${this.expiration} 일 뒤 만료됩니다.`;
    }

    isActive(user) {
      return user.active;
    }

    getDiscount(user) {
      if (this.isActive(user)) {
        console.log('할인적용!!');
        this.price = this.price * 0.9;
      }
    }
  */
 getExpirationMessage() {
   return `만료`;
 }
}
export default FoodCoupon;
```
테스트 케이스
```
import expect from 'expect';
import Coupon from './extend';
import FoodCoupon from './child';
 
describe('coupon', () => {
  it('유효한 사용자에게 쿠폰을 적용할 수 있다.', () => {
    const coupon = new Coupon(10);
    const user = {
      active: true
    };
    expect(coupon.price).toEqual(10);
    coupon.getDiscount(user);
    expect(coupon.price).toEqual(9);
  });

  it('유효하지 않은 사용자는 쿠폰을 적용할 수 없다.', () => {
    const coupon = new Coupon(10);
    const user = {
      active: false
    };
    expect(coupon.price).toEqual(10);
    coupon.getDiscount(user);
    expect(coupon.price).toEqual(10);
  });
})

describe('Food 쿠폰', () => {
  it('부모의 생성자를 호출할 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.price).toEqual(10);
  });
  
  it('부모의 매서드를 호출 할 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.getPriceText()).toEqual('10원');
  });

  it('부모의 매서드를 덮어쓸 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.getExpirationMessage()).toEqual('만료'); 
  });

  it('20원 이상 구매하면 할인 된다.', () => {
    const foodCoupon = new FoodCoupon(100);
    const user = {
      active: true
    }
    foodCoupon.getDiscount(user)
    expect(foodCoupon.price).toEqual(90); 
  });
})

 
```
### 클래스로 기존의 프로토 타입을 확장하라
### get과 set으로 인터페이스를 단순하게 만들어라
### 제너레이터로 이터러블 속성을 생성하라
1. 제너레이터 사용시 이터레이터로 배열처럼 제어할수 있게된다. (of 로 순회가능, [...제너레이터함수()] 할당가능)
```
// 제너레이터 생성 
function* getBooks() {
  yield 'book1'; // yield 외부에 공개
  yield 'book2';
  yield 'book3';
  yield 'book4';
  'book5'
}

/**
 * 제너레이터매서드().next()실행시 yield 데이터가 한줄씩 리턴된다.
 */
const books = getBooks(); 
console.log(books.next()); //{ value: 'book1', done: false }
console.log(books.next()); //{ value: 'book2', done: false }
console.log(books.next()); //{ value: 'book3', done: false }
console.log(books.next()); //{ value: 'book4', done: false }
console.log(books.next()); //{ value: undefined, done: true }

const books2 = getBooks(); 
console.log([...books2]); //[ 'kim-parent', 'kim-child1', 'kim-child2' ]

let myBookList = {
  'defaultBook1': true,
  'defaultBook2': true,
}

/**
 * 배열처럼 of로 순회가능
 * 객체는 이터레이터가 없으므로 of로 순회불가능하다.
 */
for (let book of getBooks()) { 
  myBookList[book] = false;
}

console.log(myBookList);
// {
//   defaultBook1: true,
//   defaultBook2: true,
//   book1: false,
//   book2: false,
//   book3: false,
//   book4: false
// }
```

1. 제너레이터는 트리구조등 복잡한 자료구조를 외부에 노출시키지 않게 하기위해 사용한다.
```
class Family {
  constructor(){
    this.family = {
      name:'kim-parent',
      child: {
        name: 'kim-child1',
        child: {
          name : 'kim-child2'
        }
      }
    }
  }

  *[Symbol.iterator]() { // 객체 생성시 yield로 선언한 변수들이 이터레이터로 등록됨
    let node = this.family
    while (node) {
      yield node.name;
      node = node.child;
    }
  }
}

const family = new Family();
console.log([...family]); // [ 'kim-parent', 'kim-child1', 'kim-child2' ]
```

### bind()로 문맥 문제를 해결하라
기본적으로 this는 실행 문맥에 따른다.
가령 MyClass 객체를 생성하고 c.myMethodCallMap() 내부함수에 접근하게 되면 
MyClass객채에서 함수를 실행 했기 때문에 내부함수의 this는 MyClass가 된다.
문재는  myMethodCallMap() 함수 내부에서 .map() 함수의 콜백이 실행되면 this의 문맥이 바뀌게되어
의도와 다르게 this는 MyClass를 나타내지 않는다.

```
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

const c = new MyClass();
c.myMethod();
c.myMethodCallMap();
```

이런 문제를 해결하기 위해서 
1. 화살표함수를 사용한다
화살표 함수는 this의 문맥을 바꾸지 않는다. 

```
 const msgArr = this.arr.map(v => { 
      v + this.msg // this === MyClass
    }); // [ '1호출', '2호출', '3호출' ]
```
위의 예제처럼 화살표 함수를 사용하면 this의 문맥을 바꾸지 않기 때문에 MyClass가 호출된다.

1. 함수.bind()를 사용한다.
함수.bind(객체) 를 실행하면 함수내부의 this는 객체를 가르키게된다.
따라서 클래스 내부에서 this는 클래스를 가르키므로 클래스 내부의 콜백함수에 bind(this)를 사용하면
콜백 내부에서 this를 문맥의 변경없이 사용가능하다.
콜백 사용시마다 .bind()를 사용하는것은 번거로우므로 생성자에 함수 = 함수.bind(this)를 등록하여 사용한다.

```
class MyClass {
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

const c = new MyClass();
c.myMethodCallMap();
c.myMethodCallMap2();
```

## 외부 데이터에 접근하라
### 프라미스를 이용해 비동기적으로 데이터를 가져오라
### async/await로 함수를 명료하세 생성하라
### fetch로 간단한 AJAX 호출을 처리하라
### localStorage로 상태를 장기간 유지하라