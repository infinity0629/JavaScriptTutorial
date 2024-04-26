"use strict";

/**
 * 开根号
 */
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

/**
 * 最大值 最小值
 */
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, "23", 11, 2)); // 23
console.log(Math.max(5, 18, "23px", 11, 2)); // NaN
console.log(Math.min(5, 18, 23, 11, 2)); // 2

/**
 * 计算圆面积
 */
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793

/**
 * 获取随机数
 */
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) => Math.floor(Math.random() * max - min) + 1 + min;
console.log(randomInt(1, 10));

/**
 * round 四舍五入
 * ceil 向上取整
 * floor 向下取整
 * trunc 截取整数部分
 *
 * floor trunc 区别：
 * trunc 会截取整数部分；floor 则会四舍五入。（floor 逻辑最正确，更好）
 */
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.5)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.5)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.5)); // 23

console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.5)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

/**
 * toFixed
 *
 * 参数为精确到小数点后几位（会自动四舍五入）
 */
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35
