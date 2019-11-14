export function log(data) { // default 사용시 import후 바로사용가능
  console.log(data);
}
const getTime = ()=> {
  return Date.now();
}
const getCurrentHour = () => {
  return (new Date).getHours();
}