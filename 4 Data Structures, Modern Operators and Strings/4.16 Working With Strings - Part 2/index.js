"use strict";

const airline = "TAP Air Portugal";

// 大小写转换
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// 首字符转为大写
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrenct =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrenct); // Jonas

// 对比字符串（trim 方法清除字符串两头空白，包括空字符、换行符、制表符等）
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail); // true

// 替换字符
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // 288.97$

const announcement =
    "All passengers come to barding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // All passengers come to barding gate 23. Boarding door 23!（替换从头开始第一个）
console.log(announcement.replaceAll("door", "gate")); // All passengers come to barding gate 23. Boarding gate 23!（替换所有的）
console.log(announcement.replaceAll(/door/g, "gate")); // All passengers come to barding gate 23. Boarding gate 23!（使用正则表达式，替换所有的）

// 搜索是否有字符串
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // true
console.log(plane.includes("Boeing")); // false
console.log(plane.startsWith("Air")); // true

if (plane.startsWith("Air") && plane.endsWith("neo")) {
    console.log("Part of the NEW Airbus family"); // Part of the NEW Airbus family
}
