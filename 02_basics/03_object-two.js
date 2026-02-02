//constructor in object

const myobj = {
      name: "jinal",
      age: 23,
      year: 2002,
      address: "kakxhnha"
}

// console.log(myobj); //{ name: 'jinal', age: 23, year: 2002, address: 'kakxhnha' }


function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Jinal", 23);
let user2 = new User("dhruvi", 20);

// console.log(user1);
// console.log(user2);

function Mydata(name, age, address ){
      this.name = name;
      this.age = age;
      this.address = address
}

let data1 = new Mydata("jinal", 23, "jajxb")
// console.log(data1);//{ name: 'jinal', age: 23, address: 'jajxb' }

//++++++++++++++++++++++++++++Concat object+++++++++++++++++++++++++++

let student = {
  id: 101,
  name: "Jinal",
  age: 22,
  course: "JavaScript",
  isActive: true,
  marks: [85, 90, 88],
  address: {
    city: "Ahmedabad",
    state: "Gujarat"
  }}

  let student2 = {
  id: 102,
  name: "Amit",
  age: 21,
  course: "React"
};

// let concat = {student, student2}
// console.log(concat);

let concat = {...student, ...student2}
// console.log(concat);

// console.log(Object.keys(student));//
//[
//   'id',       'name',
//   'age',      'course',
//   'isActive', 'marks',
//   'address'
// ]

// console.log(Object.values(student));
//[
//   101,
//   'Jinal',
//   22,
//   'JavaScript',
//   true,
//   [ 85, 90, 88 ],
//   { city: 'Ahmedabad', state: 'Gujarat' }
// ]