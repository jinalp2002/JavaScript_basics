//+++++++++++++++++++ FOR-OF LOOP +++++++++++++++++++++++++++++++

//loop is used to iterate over values of:

// Array
// String


//EXAMPLE:- 1 Array

// let arr = [10, 20, 30];

// for (let num of arr) {
//   console.log(num);
// }
for (const element of object) {
      
}
// Example 2: String


// let name = "jinal";

// for (let ch of name) {
//   console.log(ch);
  
// }


//++++++++++++++++++++++++++++++ FOR-IN LOOP ++++++++++++++++++++++++++++++++++++++++++++


//FOR-IN loop is used to 

// OBJECT
let user = {
  name: "Jinal",
  age: 22,
  city: "Ahmedabad"
};

for (const val in user) {
      
      // console.log(val);
      // console.log(` ${val} is ${user[val]}`);
}


//ARRAY

let arr=[1,2,3,4,5]

for (const key in arr) {
      
      console.log(`in position ${key} value is ${arr[key]}` );
      
      
}