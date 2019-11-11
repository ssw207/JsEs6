
// //es5
// function chkN() {
//   const argArr = Array.prototype.slice.call(arguments);
//   console.log(toString.call(argArr));
//   const rs = argArr.every((v) => typeof v === "number");
//   console.log(rs);
// }

//es6
function chkN(...argArray) { // 가짜배열을 진짜 배열로 바꿈 (node 환경에서는 에러발생)
  console.log(toString.call(argArr));
  const rs = argArr.every((v) => typeof v === "number");
  console.log(rs);
}

const rs = chkN(10,2,3,4,5,6,"55");''
const rs2 = chkN(10,2,3);