{
    // Access Modifiers

    // public = you can access from anywhere
    // private = you can access only in the class
    // protected = you can access only in the class and child class

 class BankAccount {
    constructor(public readonly id : number, public name : string, protected _balance : number) {}
    // for the protected now i can use it in child class
    checkBalance(){
        console.log(`Your balance is${this._balance}`);
    }

    depositBalance(amount : number) {
        this._balance = this._balance + amount;
    }

    withdrawBalance(amount : number) {
        this._balance = this._balance - amount;
    }
 }

 class StudentAccount extends BankAccount {
   test(){
    this._balance
   } 
 }

 const myAccount = new BankAccount(183,'Ashfakul Islam', 500)

 myAccount.depositBalance(500)
 myAccount.checkBalance()
 console.log('withdraw balance : 200');
 myAccount.withdrawBalance(200)
 myAccount.checkBalance()
}