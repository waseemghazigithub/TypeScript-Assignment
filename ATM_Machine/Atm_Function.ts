
export let Account_Title="Test of ATM-Machine"
export let Account_N="123-456-789"
export let Account_Balance=100000;
let AccountPin=5599;
let todaylimit=50000;

export function PinVerify(pwd: number){
  if(AccountPin==pwd ){
    console.log("your Pin Verify")
    return(true)
    }
else{
  console.log("Invalid Pin Code.")
  return(false)
}
}

export function Transaction(amount:number) {
  if(amount>Account_Balance){
    console.log("Account balance less.")
  }
  else if (amount>todaylimit){
    console.log("your today limit Excese.")
  } else { 
     console.log(`Transaction succssful. your balance now ${Account_Balance-amount}`)
  }
}