/**
 * let
 */
let age = 30;
age = 31;
console.log(age); // 31

/**
 * const
 */
const birthYear = 1991;
// birthYear = 1990; // TypeError: Assignment to constant variable.
console.log(birthYear); // 1991

// const job; // SyntaxError: Missing initializer in const declaration

/**
 * var
 *
 * ES 6 之前使用，现阶段已使用 let 替代。
 *
 * var 属于函数作用域。会提升到最近的函数作用域中都有效。
 *
 * （稍有不慎会出现作用域的问题，不建议使用！！！）
 */
var job = "Programmer";
job = "Teacher";
console.log(job); // Teacher

/**
 * 不使用 var 也可以声明一个变量（会默认为 var）。（千万不要这样做）
 */
lastName = "Lau";
console.log(lastName); // Lau
