"use strict";

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

    static hey() {
        console.log(`Hey there!`);
        console.log(this);
    }
}

// 自定义的类，无需再用构造函数添加属性的方式添加静态方法了。
// Person.hey = function () {
//     console.log(`Hey there!`);
//     console.log(this);
// };

Person.hey();
// Hey there!
// [class Person]

/**
 * 静态函数
 *
 * “不加”在原型属性里的，对象“不能”直接访问。
 * “加”在构造函数属性里，构造函数“能”直接访问
 */
console.log(Person.prototype.hasOwnProperty("hey")); // false
console.log(Person.prototype.constructor.hasOwnProperty("hey")); // true
