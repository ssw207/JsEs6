//WeakMap 사용이전 - 변수에 직접 접근가능
function Area (height, width) {
  this.height = height;
  this.width = width;
}

Area.prototype.getArea = function (){
  return this.height * this.width;
}
const area =new Area(10,20);
rs = area.getArea();
console.log(rs);

//WeakMap 사용 - priave 변수 생성
let wm = new WeakMap();

function Area2 (h,w) {
  wm.set(this, {h, w});
}

Area2.prototype.getArea = function(){
  const {h, w} = wm.get(this);
  return h * w;
}

let area2 = new Area2(10,20);
console.log(area2.getArea());

area2 = null;
console.log(wm.has(area2)); 