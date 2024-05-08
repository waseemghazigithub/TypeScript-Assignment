import { Account_Title,Account_N,Account_Balance } from "./Atm_Function.js";
import { PinVerify,Transaction} from "./Atm_Function.js";
let PinCheck:boolean

console.log("\nAccount Title  :",Account_Title)
console.log("Account No     :",Account_N)
console.log("Account Balance:",Account_Balance)
console.log("----------------------------------")

PinCheck=PinVerify(5599)

if(PinCheck==true){
Transaction(10000)
}
