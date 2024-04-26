"use strict";

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996

console.log(1234123412341234546435643564536345634564356n); // 1234123412341234546435643564536345634564356n
console.log(BigInt(1234123)); // 1234123n

console.log(10000n + 10000n); // 20000n
console.log(34298572349087523890475234n * 100000000n); // 3429857234908752389047523400000000n

console.log(typeof 20n); // bigint

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == "20"); // true

console.log(10n / 3n); // 3n
