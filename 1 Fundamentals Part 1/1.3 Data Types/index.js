/**
 * string
 */
let firstName = "Jonas";
console.log(firstName, typeof firstName); // Jonas Jonas

/**
 * number
 */
let age = 23;
console.log(age, typeof age); // 23 number

/**
 * boolean
 */
let javaScriptIsFun = true;
console.log(javaScriptIsFun, typeof javaScriptIsFun); // true boolean
javaScriptIsFun = "YES";
console.log(javaScriptIsFun, typeof javaScriptIsFun); // YES string

/**
 * undefined
 */
let year;
console.log(year, typeof year); // undefined undefined
year = 1989;
console.log(year, typeof year); // 1989 number

/**
 * null
 *
 * null 实际上并不是 object 类型。历史遗留问题才导致的是 object 类型。
 */
let nullable = null;
console.log(nullable, typeof nullable); // null object
