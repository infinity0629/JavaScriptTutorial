/**
 * 区别：== 包含了类型转换，=== 不包含类型转换。
 *
 * 强烈推荐使用 === 。
 */

const age = 18;
if (age === 18) {
    console.log("You just became an adult. (strict)"); // You just became an adult. (strict)
}
if (age == 18) {
    console.log("You just became an adult. (loose)"); // You just became an adult. (loose)
}

console.log("18" == 18); // true
console.log("18" === 18); // false

console.log(18 !== 35); // true
