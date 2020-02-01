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