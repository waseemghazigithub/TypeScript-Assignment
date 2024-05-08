"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Rnumber = Math.floor(Math.random() * 2) + 1;
console.log("\nMake a Toss");
console.log("1= Head  2= Tell\n");
Toss(2);
//------------------------------- Functions
function Toss(coin) {
    let RHT = (headtell(coin));
    let CHT = (headtell(Rnumber));
    if (coin == Rnumber) {
        console.log(`Your No is ${coin} you call ${RHT}`);
        console.log(`Coin Result ${Rnumber} is ${CHT}`);
        console.log(`You are Win `);
    }
    else {
        console.log(`Your No is ${coin} you call ${RHT}`);
        console.log(`Coin Result ${Rnumber} is ${CHT}`);
        console.log(`You are loss `);
    }
    function headtell(num) {
        if (num == 1) {
            return ("*Head*");
        }
        else if (num == 2) {
            return ("Tails");
        }
        else {
            return ("Invalid Call!");
        }
    }
}
