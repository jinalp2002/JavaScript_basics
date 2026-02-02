function myfun(){
      // console.log("hello js")
}
myfun() // syntax

function num(num1, num2){
      let number = num1 + num2;
      // console.log(number)
      
}
num(3,4)

//Example 2
function number(number1,number2){
      const num= number1 * number2
      //console.log(num);
      // return num;
      }
number(2,4)
// let result= number(2,4)
// console.log(result);


function loggedUser(username= ""){
      if(!username == "jinal"){
            console.log("please enter correct name");
             return
      }else{
            console.log("Empty");
            
      }
        
}

console.log(loggedUser("jini"));
// console.log(loggedUser("jinal"));//undefined


//FUNCTION WITH OBJECT

const myobj ={
      username: "jinal",
      age: 23
}

function createobject(obj){
      console.log(`my name is ${obj.username} and my age id ${obj.age}`);
}
createobject(myobj)


function no(no1,no2){
        let no3 = no1 + no2
        return no3
      //   console.log(no3);
        
}
//let res = no(2,3)
//console.log(res);
console.log(no(2,3));




//++++++++++++++++++++++++++++function inner function+++++++++++++++++++++

function value1(){
      const num = "hello...!"
      function value2(){
            const num2 = "jinal....!!"
            const num3 = num + num2
            
            console.log(num3);
            console.log(num2);
      }
       //console.log(num2);
      value2()
}
//console.log(num); // out of scope { } can't execute the num variable

value1()

function count1(one){
      return one + 1
}
