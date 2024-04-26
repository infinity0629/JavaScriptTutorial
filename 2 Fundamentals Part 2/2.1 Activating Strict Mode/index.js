// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) {
//     hasDriverLicense = true; // hasDriverLicense 变量名写错没有报错！！！
// }
// if (hasDriversLicense) {
//     console.log("I can drive.");
// }

"use strict";

let hasDriversLicense = false;
const passTest = true;
if (passTest) {
    // hasDriverLicense = true; // hasDriverLicense is not defined
}
if (hasDriversLicense) {
    console.log("I can drive.");
}

/**
 * 强烈建议使用严格模式！
 */
