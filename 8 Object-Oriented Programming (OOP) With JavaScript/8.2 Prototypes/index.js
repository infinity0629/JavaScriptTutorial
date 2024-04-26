"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

/**
 * 所有的函数，包括构造函数，都有一个名为 prototype 的属性（prototype 是一个对象）。
 *
 * 每个使用构造函数创建出来的对象，都可以访问在构造函数的 prototype 属性中定义的所有方法和属性。
 */

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

// 构造函数的 prototype 属性
console.log(Person.prototype); // { calcAge: [Function (anonymous)] }

// 对象使用在构造函数的 prototype 属性中定义的方法
const jonas = new Person("Jonas", 1991);
// 对象中没有构造函数的 prototype 属性中定义的 calcAge 方法
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }
jonas.calcAge(); // 33

// 访问对象中的 __proto__ 属性，可以查找到构造函数的 prototype 属性
console.log(jonas.__proto__); // { calcAge: [Function (anonymous)] }

// 判断对象原型，是否是构造函数的原型。
console.log(Person.prototype.isPrototypeOf(jonas)); // true
// 判断函数原型，是否是构造函数的原型本身。结果并不是！！！（这个方法实际是判断对象是否在构造函数的原型链上）
console.log(Person.prototype.isPrototypeOf(Person)); // false

// 在构造函数原型中定义的属性或方法永远在原型中，实例对象里没有
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species); // Homo Sapiens
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }

// 判断属性、方法是否在对象中，或者对象的原型中。
console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("calcAge")); // false
console.log(jonas.__proto__.hasOwnProperty("calcAge")); // true
