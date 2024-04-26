/**
 * Type Conversion（类型转换）
 */
const inputYear = "1991";
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // 23

/**
 * Type Coercion（强制类型转换）
 */
console.log("I am " + 23 + " years old."); // I am 23 years old.
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 23103
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

let n = "1" + 1;
n = n - 1;
console.log(n); // 10
