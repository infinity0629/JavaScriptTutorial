"use strict";

/**
 * 获取的日期时间与实际对比慢 8 小时，因为时区的关系。
 */
const now = new Date();
console.log(now); // 2024-04-22T12:38:16.638Z

/**
 * 字符串转日期时间
 */
console.log(new Date("Aug 02 2020 18:05:41")); // 2020-08-02T10:05:41.000Z
console.log(new Date("December 24, 2015")); // 2015-12-23T16:00:00.000Z

/**
 * 对应参数转日期时间
 */
console.log(new Date(2037, 10, 19, 15, 23, 5)); // 2037-11-19T07:23:05.000Z
console.log(new Date(2037, 10, 31)); // 2037-11-30T16:00:00.000Z

/**
 * 获取初始日期时间
 */
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
// 初始日期时间后 3 天
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970-01-04T00:00:00.000Z

/**
 * 日期时间获取方法
 */
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // 2037-11-19T07:23:00.000Z
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T07:23:00.000Z

// 时间戳
console.log(future.getTime()); // 2142228180000
// 时间戳转日期时间
console.log(new Date(2142228180000)); // 2037-11-19T07:23:00.000Z

/**
 * 获取当前时间戳
 */
console.log(Date.now()); // 1712650914494

/**
 * 日期时间设置方法
 */
future.setFullYear(2040);
console.log(future); // 2040-11-19T07:23:00.000Z
