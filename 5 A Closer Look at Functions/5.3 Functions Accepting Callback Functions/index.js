"use strict";

// 删除字符串里的空格并转成小写
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

// 第一个单词转换成大写
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

/**
 * 函数作为函数参数传递
 *
 * 函数属于 object，有名为 name 的字段，获取方法名
 */
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer("JavaScript is the best!", oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord
