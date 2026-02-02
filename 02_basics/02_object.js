let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);// false

//symbol to object
let userId = Symbol("userId");

let user = {
  name: "Jinal",
  [userId]: 101
};

// console.log(user.name);// name is string "name"
// console.log(user[userId]);// compalsory write syntax to execute[]
//                          // output is jinal
//                          //            101


//Objects
       
const sname = Symbol("surname")

console.log(sname);
console.log(typeof sname);// symbol


const myobject = {
      name: "jinal",
      [sname]:11,
      age: 23,
      year: 2002,
      address: "kakxhnha"
}

console.log(myobject);
console.log(myobject.address); // address key is in string form
console.log(typeof myobject.address); // string

console.log(myobject["name"]);// output is jinal
console.log(myobject[sname]);// output is 11




                        