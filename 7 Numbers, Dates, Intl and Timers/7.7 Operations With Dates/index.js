"use strict";

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // 2037-11-19T07:23:00.000Z
// 转时间戳
console.log(+future); // 2142228180000

const calcDaysPassed = (date1, date2) =>
    (date2 - date1) / (1000 * 60 * 60 * 24);
const days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days); // 10
