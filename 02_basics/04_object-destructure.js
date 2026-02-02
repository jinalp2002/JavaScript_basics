//DESTRUCTURING OBJECTS

let user = {
  name: "Jinal",
  age: 22,
  city: "Ahmedabad"
};

let {name, age} = user
console.log(name); // jinal
console.log(age); // 22

let {name: j, city: ahm} = user // rename the object(keys-values)
console.log(j);// jinal
console.log(ahm);// Ahmedabad

let {country = "India"} = user ;
console.log(country);
console.log(user);




