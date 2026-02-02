const number = 100000
const num = new Number(100000)
const value = 2.87265


// console.log(number);//100000
// console.log(num);//[Number: 100000]


// console.log(number.toFixed(3)); // 100000.000
// console.log(number.length);
// console.log(number.toLocaleString('en-IN'));//1,00,000
// console.log(value.toFixed(2));//2.87

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.round(10.985));// 11
// console.log(Math.ceil(6.834));//7
// console.log(Math.floor(4.234));//4
// console.log(Math.min(3,5,7,8));//3


// console.log(Math.floor(Math.random()*10) +1);

let min = 1;
let max = 6;

console.log(Math.floor(Math.random()*(max-min + 1) + min));

