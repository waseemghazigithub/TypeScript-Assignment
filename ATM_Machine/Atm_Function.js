"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.PinVerify = exports.Account_Balance = exports.Account_N = exports.Account_Title = void 0;
exports.Account_Title = "Test of ATM-Machine";
exports.Account_N = "123-456-789";
exports.Account_Balance = 100000;
let AccountPin = 5599;
let todaylimit = 50000;
function PinVerify(pwd) {
    if (AccountPin == pwd) {
        console.log("your Pin Verify");
        return (true);
    }
    else {
        console.log("Invalid Pin Code.");
        return (false);
    }
}
exports.PinVerify = PinVerify;
function Transaction(amount) {
    if (amount > exports.Account_Balance) {
        console.log("Account balance less.");
    }
    else if (amount > todaylimit) {
        console.log("your today limit Excese.");
    }
    else {
        console.log(`Transaction succssful. your balance now ${exports.Account_Balance - amount}`);
    }
}
exports.Transaction = Transaction;
