//++++++++++++++++++=CONCEPT OF THIS IN OBJECT+++++++++++++++++++++++++++++++++

const myobj = {
      name: "jinal",
      age: 23,
      year: 2002,
      message: function (){
            console.log(`${this.name}, is my name`);
            // console.log(this);
            
      }
      
}
// console.log(myobj.name);

// myobj.message()
myobj.name = "dhruvi"
myobj.message()
