"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Atm_Function_js_1 = require("./Atm_Function.js");
const Atm_Function_js_2 = require("./Atm_Function.js");
let PinCheck;
console.log("\nAccount Title  :", Atm_Function_js_1.Account_Title);
console.log("Account No     :", Atm_Function_js_1.Account_N);
console.log("Account Balance:", Atm_Function_js_1.Account_Balance);
console.log("----------------------------------");
PinCheck = (0, Atm_Function_js_2.PinVerify)(5599);
if (PinCheck == true) {
    (0, Atm_Function_js_2.Transaction)(10000);
}
