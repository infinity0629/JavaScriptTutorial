"use strict";

/**
 * split
 *
 * 分割字符串，生成一个新数组。
 */
console.log("a+very+nice+string".split("+")); // [ 'a', 'very', 'nice', 'string' ]
console.log("Jonas Schmedtmann".split(" ")); // [ 'Jonas', 'Schmedtmann' ]

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName, lastName); // Jonas Schmedtmann

/**
 * join
 *
 * 数组合并，生成一个新字符串
 */
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // Mr. Jonas SCHMEDTMANN

// split join 方法通常一起使用处理字符串
const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];
    for (const name of names) {
        namesUpper.push(name[0].toUpperCase() + name.slice(1));
    }
    console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis"); // Jessica Ann Smith Davis
capitalizeName("jonas schmedtmann"); // Jonas Schmedtmann

/**
 * padStart padEnd
 *
 * 填充字符串
 */
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // +++++++++++Go to gate 23!
console.log("Samuel".padStart(25, "+")); // +++++++++++++++++++Samuel
console.log(message.padStart(25, "+").padEnd(30, "+")); // +++++++++++Go to gate 23!+++++

// 给数字替换星号
const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
};
console.log(maskCreditCard(21097234091374)); // **********1374
console.log(maskCreditCard(7234091374)); // ******1374
console.log(maskCreditCard("901834401928401892349081230984")); // **************************0984

/**
 * repeat
 *
 * 重复拼接字符串
 */
console.log("Bad weather... All Departures Delayed...".repeat(3)); // Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...
