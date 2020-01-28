export function log(data) { // default 사용시 import후 바로사용가능
  console.log(data);
}


/* Class */
export default class MyLogger { // export defult _; 방식으로도 설정가능
  constructor(p) {
    this.lecture = ['java', 'ios'];
  }
  
  getCurrentHour() { 
    return (new Date).getHours();
  }

  getLecture() {
    return this.lecture;
  }

  getTime() {
    return Date.now();
  }
}