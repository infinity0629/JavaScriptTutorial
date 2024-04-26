"use strict";

/**
 * 构造函数命名规则：第一个字母大写
 */
const Person = function (firstName, birthYear) {
    console.log(this); // Person {}
    this.firstName = firstName;
    this.birthYear = birthYear;

    // 永远不要这样定义方法，方法一多了 维护就是灾难。
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

/**
 * 使用 new 关键字调用构造函数，创建对象步骤：
 *
 * 1、新建一个对象 {}
 * 2、将创建好的对象 {} 赋值给 this
 * 3、将创建好的对象 {} 链接到原型（prototype）
 * 4、函数最后自动将创建好的对象 {} 返回
 */
const jonas = new Person("Jonas", 1991);
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack); // Person { firstName: 'Matilda', birthYear: 2017 } Person { firstName: 'Jack', birthYear: 1975 }

/**
 * 判断对象是否是构造函数的实例
 */
console.log(jonas instanceof Person); // true
