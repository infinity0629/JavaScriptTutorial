/**
 * 运算符优先级文档：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018); // true
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); // 46 19 32.5

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10 10
