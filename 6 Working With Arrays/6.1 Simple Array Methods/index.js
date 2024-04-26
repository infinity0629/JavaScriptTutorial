"use strict";

let arr = ["a", "b", "c", "d", "e"];

/**
 * slice
 *
 * 提取数组一部分，返回新数组。（不修改原数组）
 *
 * 取值：
 * 1、包含 start 索引，不包含 end 索引（意味着长度等于 end 减 start）
 * 2、只有 start 索引，获取从 start 索引开始一直到最后元素
 * 3、start 索引可以是负值，最后一个元素索引为 -1
 */
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c' ]

// 两种复制方法（推荐使用解构方式）
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]

/**
 * splice
 *
 * 删除数组一部分，返回新数组。（修改原数组）
 *
 * 取值：
 * 1、从 start 索引开始，删除 deleteCount 个元素
 * 2、只有 start 索引，删除从 start 索引开始一直到最后元素
 * 3、start 索引可以是负值，最后一个元素索引为 -1
 */
console.log(arr.splice(2)); // [ 'c', 'd', 'e' ]
console.log(arr); // [ 'a', 'b' ]
console.log(arr.splice(-1)); // [ 'b' ]
console.log(arr); // [ 'a' ]

arr = ["a", "b", "c", "d", "e"];
console.log(arr.splice(1, 2)); // [ 'b', 'c' ]
console.log(arr); // [ 'a', 'd', 'e' ]

/**
 * reverse
 *
 * 翻转数组（修改原数组）
 */
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

/**
 * concat
 *
 * 拼接连个数组，返回新数组。（不修改两个原数组）
 */
const letters = arr.concat(arr2);
console.log(letters);
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

// 另一种方法（使用数组解构，更推荐这一种）
console.log([...arr, ...arr2]);
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]

/**
 * join
 *
 * 数组合并，生成一个新字符串。（不修改原数组）
 */
console.log(letters.join(" - ")); // a - b - c - d - e - f - g - h - i - j
console.log(letters);
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]
