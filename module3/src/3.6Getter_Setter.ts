{
  // Getter & Setter

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance += amount;
    }

    set withdraw(amount: number) {
      this._balance -= amount;
    }
  }

  const myAccount = new BankAccount(183, "Ashfakul Islam", 1000);

  myAccount.deposit = 100;
  myAccount.withdraw = 250;
  const balance = myAccount.balance;

  console.log(balance);
}
