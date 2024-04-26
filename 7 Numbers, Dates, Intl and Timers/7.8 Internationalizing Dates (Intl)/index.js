"use strict";

/**
 * 直接获取当前日期时间
 *
 * 通过国际化转换可以获取正确的时间
 */
const now = new Date();
console.log(new Intl.DateTimeFormat("zh-CN").format(now)); // 2024/4/22

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 *
 * 使用可选参数
 */
let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
};
console.log(new Intl.DateTimeFormat("zh-CN", options).format(now)); // 2024/4/22

options = {
    year: "numeric",
    month: "long",
    day: "numeric",
};
console.log(new Intl.DateTimeFormat("zh-CN", options).format(now)); // 2024年4月22日

options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
console.log(new Intl.DateTimeFormat("zh-CN", options).format(now)); // 2024年4月22日星期一 20:56:54
