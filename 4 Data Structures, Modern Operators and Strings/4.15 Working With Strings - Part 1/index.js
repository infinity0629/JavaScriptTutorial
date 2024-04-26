"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log("B737"[0]); // B

console.log(airline.length); // 16
console.log("B737".length); // 4

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("portugal")); // -1 (找不到索引返回 -1)

/**
 * slice
 *
 * 提取字符串一部分（返回新字符串）
 *
 * 取值：
 * 1、包含 start 索引，不包含 end 索引（意味着长度等于 end 减 start）
 * 2、只有 start 索引，获取从 start 索引开始一直到最后字符
 * 3、start 索引可以是负值，最后一个字符索引为 -1
 */
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(" "))); // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (sear) {
    const s = sear.slice(-1); // 取最后一个字符
    if (s === "B" || s === "E") {
        console.log("You got the middle seat");
    } else {
        console.log("You got lucky");
    }
};
checkMiddleSeat("11B"); // You got the middle seat
checkMiddleSeat("23C"); // You got lucky
checkMiddleSeat("3E"); // You got the middle seat

/**
 * string 不是对象，之所以能使用对象方法是因为会自动包装成包装类 String，再去调用方法。
 */
console.log(new String("Jonas")); // [String: 'Jonas']
console.log(typeof new String("Jonas")); // object
