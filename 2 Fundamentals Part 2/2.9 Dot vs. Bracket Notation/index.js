"use strict";

const jonas = {
    firstName: "Jonas",
    lastName: "Schedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
// {
//   firstName: 'Jonas',
//   lastName: 'Schedtmann',
//   age: 46,
//   job: 'teacher',
//   friends: [ 'Michael', 'Peter', 'Steven' ]
// }

/**
 * 获取属性（推荐使用点语法）
 */
console.log(jonas.lastName); // Schedtmann
console.log(jonas["lastName"]); // LauSchedtmann

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // Jonas
console.log(jonas["last" + nameKey]); // Schedtmann
console.log(jonas[`first${nameKey}`]); // Jonas
console.log(jonas[`last${nameKey}`]); // Schedtmann

/**
 * 添加 / 修改属性（推荐使用点语法）
 */

if (!jonas.location) {
    jonas.location = "Portugal";
}
jonas["twitter"] = "@jonasschedtman";
console.log(jonas);
// {
//   firstName: 'Jonas',
//   lastName: 'Schedtmann',
//   age: 46,
//   job: 'teacher',
//   friends: [ 'Michael', 'Peter', 'Steven' ],
//   location: 'Portugal',
//   twitter: '@jonasschedtman'
// }
