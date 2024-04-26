"use strict";

/**
 * 使用 Object.create 方法一样可以实现对象的创建。
 */

const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear);
    },

    // 自定义初始化方法
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven); // {}
steven.name = "Steven";
steven.birthYear = 1989;
steven.calcAge(); // 35

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge(); // 45
