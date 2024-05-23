let obj = {
  name: "Muhammad Waseem",
  age: 40,
  cellno: 3209220047,
  Cars: ["Honda", "Toyota", "Marcedeec"],
  child:{elder: "Eshal", younder:"Aswah"},
  salary: () => {
    console.log(("Berozgar he"));
  },
};

let obj1 = {
  name: "Aqeel Ahmed",
  age: 35,
  cellno: 320999999,
  Mobile: [3333203546, 3209220047, 37765656],
//   child:{elder: "Eshal", younder:"Aswah"},
  salary: () => {
    return 50000;
  },
};
console.log("===========Object-1============");
// console.log(obj)
console.log("Name :", obj.name);
console.log("Age  :", obj.age);
console.log("Cars :", obj.Cars[0]);
obj.salary();
console.log("==========Object-2================");

console.log("Name    :", obj1.name);
console.log("Age     :", obj1.age);
console.log("Mobile# :", obj1.Mobile[2]);
let objsal = obj1.salary();
console.log("Salary  :", objsal);

console.log(`\n=================================`);
console.log(
  `\nTest for Objects:\nMy name is ${obj.name} and my colleague name is ${obj1.name}\nI have a list of cars ${obj.Cars} my colleague Salary is ${objsal} My Elder Daughter name is ${obj.child.elder} and  younger name is ${obj.child.younder} `
);

 let cobj=  obj
 cobj.name="Value of cobj."
console.log("\nCopy Object with obj.",cobj.name)
console.log("after change cobj.name value obj.name value same.",obj.name)