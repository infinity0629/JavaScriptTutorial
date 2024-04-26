"use strict";

/**
 * 实际上不支持 protected 标识符。
 *
 * 约定代码使用 _ 标识变量为 protected。
 */
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];

        console.log(`Thanks for opening an account, ${owner}`);
    }

    get movements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const account = new Account("Jonas", "EUR", 1111);
// Thanks for opening an account, Jonas

account.deposit(250);
account.withdraw(140);
console.log(account);
// Account {
//   owner: 'Jonas',
//   currency: 'EUR',
//   _pin: 1111,
//   _movements: [ 250, -140 ]
// }
