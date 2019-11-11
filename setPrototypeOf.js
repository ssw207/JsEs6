/**
 * setPrototypeOf
 * 1.기존 obj에 prototype function을 설정하고 새로운 객체를 리턴한다. 객체를 만들때 유용
 */
const healthObj = {
  showHealth : function() {
    console.log("오늘 운동신간 : "+ this.healthTime);
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}

const myHealth = {
  name : "crong",
  lastTime : "11:20"
}

const newobj = Object.setPrototypeOf(myHealth, healthObj); // obj, prototype function => new obj 리턴
console.log(newobj.showHealth, newobj.setHealth);


/**
 * serPrototypeOf로 객체간 Prototype chain 생성하기
 */

// parent
const healthObj2 = {
  showHealth : function() {
    console.log("오늘 운동신간 : "+ this.healthTime);
  },
  setHealth : function(newTime) {
    this.healthTime = newTime;
  }
}

//child obj
const healthChildObj = {
  getAge : function() {
    return this.getAge;
  }
}

Object.setPrototypeOf(healthChildObj, healthObj2);

const childObj = Object.setPrototypeOf({
  age : 22
}, healthChildObj );

childObj.setHealth("12:55");
childObj.showHealth(); // prototype chain을 사용해서 parent의 함수 호출

console.log("children is ", childObj);

