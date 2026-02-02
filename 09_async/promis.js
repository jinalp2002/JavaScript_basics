// const promiseOne = new Promise(function (resolve, result) {
//       setTimeout(function () {
//             console.log("async");
//             resolve()
//       },2000)
      
// })
// promiseOne.then(function(){
//       console.log("hello jinal");
      
// })

// new Promise(function (resolve, reject) {
//       setTimeout(function () {
//             console.log("hello dhruvi");
//             resolve()
//       },1000)
// }).then(function(){
//       console.log("bye dhruvi");
      
// })


new Promise(function (resolve, reject) {
      setTimeout(()=>{
        let num = true;
        if(num == true){
            resolve('enter correct value')
            
        }else{
            reject('your number is failed')
            
        }
      }, 2000)

}).then((num)=>{
      console.log(num);
}).catch((num)=>{
      console.log(num);
      
})

