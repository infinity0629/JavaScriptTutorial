// "use strict";

const calcAge = function (birthYear) {
    const age = 2037 - birthYear;

    // “calcAge 函数”作用域找不到变量 firstName ，沿着作用域链继续向上查找；
    // 在全局中找到变量 firstName 。
    console.log(firstName); // Jonas

    const printAge = function () {
        // “printAge 函数”作用域找不到变量 firstName ，沿着作用域链向上查找；
        // “calcAge 函数”作用域找不到变量 firstName ，沿着作用域链继续向上查找；
        // 在全局中找到变量 firstName 。
        const output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output); // Jonas You are 46, born in 1991

        if (birthYear >= 1981 && birthYear <= 1996) {
            // var 标识的变量会上升作用域到最近的函数作用域中（printAge 函数”作用域）
            var millenial = true;

            // 假如在函数作用域中，定义与全局一样名称 firstName 的变量，会读取函数作用域下的。
            // const firstName = "Steven";

            // “if 代码块”作用域找不到变量 firstName ，沿着作用域链向上查找；
            // “printAge 函数”作用域找不到变量 firstName ，沿着作用域链向上查找；
            // “calcAge 函数”作用域找不到变量 firstName ，沿着作用域链继续向上查找；
            // 在全局中找到变量 firstName 。
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str); // Oh, and you're a millenial, Jonas

            // 在非严格模式下，函数声明（Fuction Declarations）会上升作用域到最近的函数作用域中（printAge 函数”作用域）
            // 会像 var 标识的变量 millenial 一样！！！
            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str); // ReferenceError: str is not defined
        console.log(millenial); // true
        console.log(add(2, 3)); // 5
    };
    printAge();
    // console.log(millenial); // ReferenceError: str is not defined
    // console.log(add(2, 3)); // ReferenceError: add is not defined

    return age;
};

// 全局变量 firstName 。
const firstName = "Jonas";

calcAge(1991);
// console.log(age); // ReferenceError: age is not defined
