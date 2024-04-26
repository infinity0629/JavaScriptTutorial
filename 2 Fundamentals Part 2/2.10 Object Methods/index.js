"use strict";

const jonas = {
    firstName: "Jonas",
    lastName: "Schedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // },

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        // 添加 age 属性
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${
            jonas.job
        }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    },
};

/**
 * 调用方法（推荐使用点语法）
 */

// console.log(jonas.calcAge(1991)); // 46
// console.log(jonas["calcAge"](1991)); // 46

console.log(jonas.calcAge()); // 46
console.log(jonas["calcAge"]()); // 46

console.log(jonas.age); // 46

console.log(jonas.getSummary()); // Jonas is a 46-year old teacher, and he has a driver's license.
