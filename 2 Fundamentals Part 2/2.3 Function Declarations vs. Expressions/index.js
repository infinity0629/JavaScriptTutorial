"use strict";

/**
 * 函数声明和函数表达式最大的区别：
 * 函数声明在定义前可以直接使用，函数表达式必须在定义之后才能使用。
 *
 * 强烈建议使用函数表达式！！！
 * 在非严格模式下，函数声明作用域是函数作用域（Function Scope），和 var 变量一样，会提升到最近的函数作用域中都有效。
 * 使用了函数声明后可以很好的控制作用域。
 */

/**
 * Function declaration
 */
console.log(calAge1(1991)); // 46

function calAge1(birthYear) {
    return 2037 - birthYear;
}

/**
 * Function expression
 */
// console.log(calAge2(1991)); // ReferenceError: Cannot access 'calAge2' before initialization

const calAge2 = function (birthYear) {
    return 2037 - birthYear;
};

console.log(calAge2(1991)); // 46
