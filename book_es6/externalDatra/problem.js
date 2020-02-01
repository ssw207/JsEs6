getUserData = (cb) => {
  setTimeout(() => {
    cb({name:'kim'})
  }, 1000);
}

console.log("시작");
getUserData(data => console.log(data.name));
console.log("종료");