"use strict";

const arr = [23, 11, 64];

/**
 * 取第一个元素
 */
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

/**
 * 取最后一个元素
 */
// [] 中不能使用负数
console.log(arr[-1]); // undefined
console.log(arr[arr.length - 1]); // 64

// 使用 at 方法可以使用负数
console.log(arr.at(-1)); // 64

// 先使用 slice 创建一个新数组在取第一个，相当于去最后一个元素（这样还会开辟新内存空间，不建议使用！）
console.log(arr.slice(-1)[0]); // 64

/**
 * 字符串也可以使用 at 方法
 */
console.log("jonas".at(0)); // j
console.log("jonas".at(-1)); // s
