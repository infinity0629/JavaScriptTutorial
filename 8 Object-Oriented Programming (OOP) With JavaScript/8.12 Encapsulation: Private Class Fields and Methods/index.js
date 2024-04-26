"use strict";

class Account {
    #movements = [];

    static #id = 1001;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    get movements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    #approveLoan(val) {
        return true;
    }
}

const account = new Account("Jonas", "EUR", 1111);
// Thanks for opening an account, Jonas

account.deposit(250);
account.withdraw(140);
console.log(account); // Account { owner: 'Jonas', currency: 'EUR', _pin: 1111 }
