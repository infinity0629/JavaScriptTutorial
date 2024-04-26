"use strict";

/**
 * getter setter 内部定义的时候是函数，外部使用的时候是属性。
 */

/**
 * 在对象中使用 getter setter
 */
const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],

    get lastest() {
        // return this.movements.slice(-1).pop();
        return this.movements.at(-1);
    },

    set lastest(movement) {
        this.movements.push(movement);
    },
};

console.log(account.lastest); // 300
account.lastest = 50;
console.log(account.movements); // [ 200, 530, 120, 300, 50 ]

/**
 * 在类中使用 getter setter
 */
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    /**
     * 任何 this.fullName 赋值，都会进入 set 方法里。
     * 因而赋值经常需要一个新变量 this._fullName，否则会进入死循环。
     * 因为用了新变量 this._fullName，get 方法里返回也需要使用新变量 this._fullName。
     */
    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name!`);
        }
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new Person("Jessica Davis", 1991);
console.log(jessica); // Person { _fullName: 'Jessica Davis', birthYear: 1991 }
