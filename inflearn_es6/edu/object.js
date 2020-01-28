function getObj () {

  const name = 'swsong';
  const getName = function () {
    return name;
  }

  const setName = function (newname) {
    name = newname;
  }

  const printName = function () {
    console.log(name);
  }

  return {
    getName : getName,
    setName : setName
  }
}

var obj = getObj();
console.log(obj);