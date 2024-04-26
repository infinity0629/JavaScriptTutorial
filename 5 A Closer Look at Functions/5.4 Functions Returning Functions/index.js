"use strict";

/**
 * 函数作为函数返回值返回
 */
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Jonas"); // Hey Jonas
greeterHey("Steven"); // Hey Steven

greet("Hello")("Jonas"); // Hello Jonas

/**
 * 箭头函数实现（如果看起来费劲不建议这么写）
 */
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hello")("Jonas"); // Hello Jonas
