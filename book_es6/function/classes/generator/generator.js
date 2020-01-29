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