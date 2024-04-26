"use strict";

/**
 *  number 类型不区分整数与浮点数，只要数值相同两者相等。
 */
console.log(23 === 23.0); // true

/**
 * 不要做浮点数对比，会有精度问题。
 */
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

/**
 * Number / +
 *
 * 两种最常用的字符串转数字的方法（推荐使用 +）
 */
const a = Number("23");
const b = +"23";
console.log(typeof a, a); // number 23
console.log(typeof b, b); // number 23

/**
 * parseInt / parseFloat
 *
 * 字符串转换数字，用于特殊的字符串。
 *
 * 1、先清除字符串两头的空白符
 * 2、第一个字符是数字才会继续解析，否则返回 NaN
 * 3、直至解析至最后一个数字
 *
 * 第二个参数 radix 为 进制（默认 10 进制）
 */
console.log(Number.parseInt("30px")); // 30
console.log(Number.parseInt("e23")); // NaN

console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23", 10)); // NaN
console.log(Number.parseInt(1000, 2)); // 8

console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(Number.parseFloat("   2.5rem   ")); // 2.5

/**
 * isNaN
 *
 * 是否“不是数字”
 */
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0)); // false

/**
 * isFinite
 *
 * 是否是“有限数字”
 */
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(23 / 0)); // false

/**
 * isInteger
 *
 * 是否是整数
 */
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
