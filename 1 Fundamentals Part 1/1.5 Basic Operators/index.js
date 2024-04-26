/**
 * Math operators
 */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 92 4.6 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // Jonas Schmedtmann

/**
 * Assignment operators
 */
let x = 10 + 5;
console.log(x); // 15
x += 10;
console.log(x); // 25
x *= 4;
console.log(x); // 100
x++;
console.log(x); // 101
x--;
console.log(x); // 100
--x;
console.log(x); // 99
++x;
console.log(x); // 100

/**
 * Comparison operators
 */
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
console.log(now - 1991 > now - 2018); // true
