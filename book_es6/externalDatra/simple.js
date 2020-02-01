getUserData = (resolve, reject) => {
  return new Promise((resolve,reject) => {
    resolve({name:'kim'})
  });
}

getUserData().then(data => console.log(data.name));


failUserData = (resolve, reject) => {
  return new Promise((resolve,reject) => {
    reject({message:'fail'})
  });
}

failUserData().then().catch(data => console.log(data.message));
