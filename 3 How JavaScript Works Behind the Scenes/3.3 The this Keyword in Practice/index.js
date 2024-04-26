"use strict";

/**
 * this 是 {} 对象（空对象)。(浏览器 环境下是 window 对象)
 */
console.log(this); // {}

/**
 * 函数声明/表达式内 this：
 * 严格模式下，函数内 this 是 undefined 值。
 * 非严格模式下，函数内 this 是 global 对象（浏览器 环境下是 window 对象）。
 *
 * 箭头函数内 this ：
 * “调用时指向上层作用域”！！！
 * 函数内 this 是 {} 对象（空对象)。(浏览器 环境下是 window 对象)
 */
const calcAge = function (birthYear) {
    console.log(this); // undefined
    console.log(2037 - birthYear); // 46
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(this); // {}
    console.log(2037 - birthYear); // 46
};
calcAgeArrow(1991);

/**
 * 对象方法声明/表达式内 this：
 * 指向调用该方法的对象。
 *
 * 对象箭头方法内 this：
 * “调用时指向上层作用域”！！！
 * 方法内 this 是 {} 对象（空对象)。(浏览器 环境下是 window 对象)
 */
const jonas = {
    year: 1991,

    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // TypeError: Cannot read properties of undefined (reading 'year')
        // const isMillenial = function () {
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };

        // ES 6 之前这么做
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // ES 6 之后推荐用箭头方法
        // 箭头方法内 this ：“调用时指向上层作用域”！！！
        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

    calcAgeArrow: () => {
        // 这里 this 的上层作用域虽然看起来是 object，实际不是。
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();
// {
//   year: 1991,
//   calcAge: [Function: calcAge],
//   calcAgeArrow: [Function: calcAgeArrow]
// }
// 46
jonas.calcAgeArrow();
// {}
// NaN

const matilda = {
    year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
// { year: 2017, calcAge: [Function: calcAge] }
// 20

const func = jonas.calcAge;
// func(); // TypeError: Cannot read properties of undefined (reading 'year')

/**
 * arguments keyword（通常不用，需要知道有。）
 */
const addExpr = function (a, b) {
    console.log(arguments);
};
addExpr(); // [Arguments] {}

const addArrow = (a, b) => console.log(arguments);
addArrow();
// [Arguments] {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: {
//         id: '.',
// ...

/**
 * 全局对象：
 *
 * node 环境下使用 global 获取；
 * 浏览器 环境下使用 this 获取；(浏览器 环境下是 window 对象)
 *
 * 所有 环境下通用 globalThis（>= ES2020）。
 */
console.log(global); // <ref *1> Object [global] { ...
console.log(globalThis); // <ref *1> Object [global] { ...
console.log(global === globalThis); // true

/**
 * node 环境的 this：
 *
 * 指向 {} 对象（空对象)。
 */
console.log(this); // {}
console.log(module.exports); // {}
console.log(this === module.exports); // true
