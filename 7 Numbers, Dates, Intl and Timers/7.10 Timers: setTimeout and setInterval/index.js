"use strict";

/**
 * date 对象直接使用可能会有时区误差，直接使用 `${}` 字符串字面量会调整到正常时区
 */

console.log(`${new Date()}`);
setTimeout(() => console.log(`${new Date()} Here is your pizza.`), 1000);
// Mon Apr 22 2024 20:58:58 GMT+0800 (China Standard Time)
// Mon Apr 22 2024 20:58:59 GMT+0800 (China Standard Time) Here is your pizza.
