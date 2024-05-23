import inquirer from "inquirer";
let tableNo = await inquirer.prompt([{
        type: "number",
        message: "Enter Table No :",
        name: "tno",
    },
    {
        type: "number",
        message: "Enter Upto serise :",
        name: "serise",
    }
]);
if (tableNo.tno > 0 && tableNo.serise) {
    console.log(`\nYour Table No: ${tableNo.tno}\n`);
    for (let i = 1; i <= tableNo.serise; i++) {
        console.log(`${tableNo.tno}  X ${i}  =  ${tableNo.tno * i}`);
    }
}
else {
    console.log("Kindly enter a numeric value.");
    process.exit(0);
}
