"use strict";

/**
 * var 标识的变量 me 提升（hoisting）了，初始值是 undefined。
 * let const 标识的变量 job、year 还在 TDZ（Temporal Dead Pool 暂时死亡池） 中。
 */
console.log(me); // undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

/**
 * 函数声明的函数 addDecol 提升（hoisting）了，初始值是实际的函数（Actual Function），能直接获得返回值。
 * let const 标识的变量 addExpr、addArrow （函数表达式变量）还在 TDZ（Temporal Dead Pool 暂时死亡池） 中。
 * var 标识的变量 addExprVar、addArrowVar （函数表达式变量）提升（hoisting）了，初始值是 undefined。调用函数等同于 undefined(2, 3)，所以会报错 TypeError: XXX is not a function。
 */
console.log(addDecol(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addExprVar(2, 3)); // TypeError: addExprVar is not a function
// console.log(addArrowVar(2, 3)); // TypeError: addArrowVar is not a function

function addDecol(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
    return a + b;
};

var addArrowVar = (a, b) => a + b;
