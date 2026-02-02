//{} -scopes
// let a = 10
// const b = 20
// var c = 30
// GLOBAL SCOPE

//BLOCK SCOPE
if (true){
      let a = 10
      const b = 20
      var c = 30
      console.log(a);
      
}
// console.log(a);
// console.log(b);
//console.log(c); // avoid to use var it creates complicate code


//+++++++++++++++++++   HOISTING ++++++++++++++++++++++++++++++++

// Hoisting in JavaScript means that declarations are moved to the top of their scope before code execution. 
//HOISTING WITH VARIABLE 

            // hoisting with variables can posible
//console.log(y);
let y = 20; // ReferenceError: Cannot access 'y' before initialization



//hoisting with function
sayHello();

function sayHello() {
  console.log("Hello");
}                             // output is printed