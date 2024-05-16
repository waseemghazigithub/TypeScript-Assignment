let sname=["waseem","Aqeel","Areeb","shumail"]
console.log("Array Function practice")
console.log("-----------------------")
console.log(sname,"<-----------Original array")


sname.push("Imran")
console.log(sname.push("ghazi"),"Return length of array and append value at last index")
console.log(sname, "after push('imran') function used an element append last index with value imran")
sname.pop()
console.log(sname,"after pop() function used delete value from last index")
console.log(sname.pop(),"<-------Return last value of array and deleted")
console.log(sname,"Delete last value of index")

sname.shift();
console.log(sname, "Delete First element from array")

sname.unshift("New value","abc")
console.log(sname,"Unshift Value added first place\n\n")

console.log("slice and splice Function")
console.log(sname.slice(1,3),"<-------return arry an element from index 1 to 2 ")
let sli=sname.slice(1,3)  //store element 1 to in array sli
console.log(sli)

// console.log(sli.splice(1,2),"Delete an element from inex 1 to 2")
console.log(sli)
console.log("<-------Other Array Function -------->")
console.log(sname)
console.log(sname.sort(), "<-----------Array use Sort() function")
console.log(sname.reverse(),"<-----------Array use reverse() function")
// console.log(sname.join("-"))

let concatarray= sname.concat(sli)
console.log(concatarray, "<---------concat two array sname + sli array")

const name = sname.find(n => n === "Aqeel");

if (name) {
    console.log(`Found: ${name}`); // Output: Found: Aqeel
} else {
    console.log("Name not found");
}

sname.push("Aqeel")
var value = sname.filter(element => element === "Aqeel"); 
console.log( value, "<--------------Fiter am array as given condition" );

var arr = [ 11, 89, 23, 7, 98 ];    
// check for odd number 
var valuen = arr.filter(element => element % 2 == 1); 
console.log( valuen,"<----------- Retun number value odd" );

console.log(arr.indexOf(89),"<--------Retrun index of Array", arr[arr.indexOf(89)], "<---Value of index 1")
console.log(sname.indexOf("Aqeel"),"<--------Retrun index of Array sname first element of aqeel")
console.log(sname.lastIndexOf("abc"))
sname.map

// arr.forEach((num) => {
//     console.log(num);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log("Index:",arr[i]);
//  }
var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
const doubledNumbers: number[] = numbers.map(num => num * 2);
console.log("roots is : " + roots );
console.log("Multiply 2 is : " + doubledNumbers )
