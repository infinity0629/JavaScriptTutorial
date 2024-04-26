"use strict";

/**
 * 类表达式
 */
// const Person = class {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         console.log(2024 - this.birthYear);
//     }
// };

/**
 * 类声明
 *
 * 类声明就是语法糖，还是原型实现的机制。
 *
 * 特性：
 * 1、类无法在声明前使用。
 * 2、类是第一公民，意味着可以当参数传递，也可以作为函数返回值。（实际上类还是函数）
 * 3、类内部是默认开启严格模式的。
 */
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new Person("Jessica", 1996);
console.log(jessica); // Person { firstName: 'Jessica', birthYear: 1996 }

jessica.calcAge(); // 28

console.log(jessica.__proto__ === Person.prototype); // true

// 自定义的类，无需再用原型添加属性的方式添加方法了。
// Person.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); // Hey Jessica
