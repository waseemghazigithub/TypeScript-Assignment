var obj = {
    name: "Muhammad Waseem",
    age: 40,
    cellno: 3209220047,
    Cars: ["Honda", "Toyota", "Marcedeec"],
    child: { elder: "Eshal", younder: "Aswah" },
    salary: function () {
        console.log(("Berozgar he"));
    },
};
var obj1 = {
    name: "Aqeel Ahmed",
    age: 35,
    cellno: 320999999,
    Mobile: [3333203546, 3209220047, 37765656],
    //   child:{elder: "Eshal", younder:"Aswah"},
    salary: function () {
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
// let cobj=  obj
// cobj.name="Value of cobj."
console.log("Name    :", obj1.name);
console.log("Age     :", obj1.age);
console.log("Mobile# :", obj1.Mobile[2]);
var objsal = obj1.salary();
console.log("Salary  :", objsal);
console.log("\n=================================");
console.log("\nTest for Objects:\nMy name is ".concat(obj.name, " and my colleague name is ").concat(obj1.name, "\nI have a list of cars ").concat(obj.Cars, " my colleague Salary is ").concat(objsal, " My Elder Daughter name is ").concat(obj.child.elder, " and  younger name is ").concat(obj.child.younder, " "));
var cobj = obj;
cobj.name = "Value of cobj.";
console.log("\nCopy Object with obj.", cobj.name);
console.log("after change cobj.name value obj.name value same.", obj.name);
