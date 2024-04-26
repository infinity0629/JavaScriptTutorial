"use strict";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

/**
 * 原型链构建“继承”
 */
const jonas = new Person("Jonas", 1991);
console.log(jonas.__proto__); // { calcAge: [Function (anonymous)] }
console.log(jonas.__proto__.__proto__); // [Object: null prototype] {}
console.log(jonas.__proto__.__proto__.__proto__); // null

/**
 * Person.prototype.constructor 指向 Person() 构造函数
 */
console.log(Person.prototype.constructor); // [Function: Person]

/**
 * Array 的原型链
 */
const arr = [3, 6, 9, 3, 9];
console.log(arr.__proto__); // Object(0) []
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // [Object: null prototype] {}

/**
 * 给 Array 原型上添加方法
 */
Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique()); // [ 3, 6, 9 ]
