const array = [1,2,3,4,5]

// console.log(array);//[ 1, 2, 3, 4, 5 ]
// console.log(array[2]);// 3

array.push(6)
//console.log(array);//[ 1, 2, 3, 4, 5, 6 ]

array.pop(7)
//console.log(array);

// array.shift()
//console.log(array);//[ 2, 3, 4, 5 ]


array.unshift(9)
//console.log(array);//[ 9, 1, 2, 3, 4, 5 ]


//++++++++++++++++++++++++++ SLICE AND SPLICE +++++++++++++++++++++++++++

const myarr = [1,2,3,4,5,6]
// console.log(myarr);

// console.log("A", myarr);

const myarr1 = myarr.slice(1,4)
// console.log("B", myarr1);

const name = "jinal"
const sname = new Array(1,1,1,1)
//console.log(sname);
//console.log(typeof sname);


// const rename = [...name]
// console.log(rename);
// console.log(typeof name);



//concat
let a = [1];
let b = [2];
let c = [3];

let d = [a , b ,c]
//console.log(d);//[ a: [ 1 ], b: [ 2 ], c: [ 3 ] ]
//console.log(typeof d);


let result = [...a, ...b, ...c];
//console.log(result);


//SLICE// originial array may not changed in slice
let x = [1, 2, 3, 4, 5,6,7,8];
let z = x.slice(1, 6);

// console.log(x);
// console.log(z);// [ 2, 3, 4, 5, 6 ]

let i = [1,2,3,4]
let j = i.splice(1,2);

console.log(i);// changed original array using splice 
console.log(j); //here output shows that 1st and 2nd position number are removed [ 2, 3 ]

