"use strict";

/**
 * sort
 *
 * 会直接修改原数组
 */

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]
console.log(owners); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]

// 数字数组直接 sort 会有奇怪的问题
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());
// [
//   -130, -400, -650,
//   1300,  200, 3000,
//    450,   70
// ]

// 纠正的方法
console.log(movements.sort((a, b) => a - b));
// [
//   -650, -400, -130,
//     70,  200,  450,
//   1300, 3000
// ]
console.log(movements.sort((a, b) => b - a));
// [
//   3000, 1300,  450,
//    200,   70, -130,
//   -400, -650
// ]
