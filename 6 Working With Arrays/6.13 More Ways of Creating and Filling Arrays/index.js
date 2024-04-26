"use strict";

console.log([1, 2, 3, 4, 5, 6, 7]);
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

const x = new Array(7);
console.log(x); // [ <7 empty items> ]
x.fill(1);
console.log(x);
// [
//   1, 1, 1, 1,
//   1, 1, 1
// ]

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// [
//   1, 1, 1, 1,
//   1, 1, 1
// ]
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
