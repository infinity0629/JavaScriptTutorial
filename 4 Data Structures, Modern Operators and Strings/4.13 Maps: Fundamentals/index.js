"use strict";

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");

// set 后返回 map
console.log(rest.set(2, "Lisbon, Portugal"));
// Map(3) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   2 => 'Lisbon, Portugal'
// }

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(");
console.log(rest.get("name")); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get(1)); // Firenze, Italy

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // We are open :D

console.log(rest.has("categories")); // true

rest.delete(2);
console.log(rest);
// Map(7) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'We are open :D',
//   false => 'We are closed :('
// }
console.log(rest.size); // 7

/**
 * 使用对象作为 key 需要注意的地方
 */
rest.set([1, 2], "Test");
console.log(rest);
// Map(8) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 23,
//   true => 'We are open :D',
//   false => 'We are closed :(',
//   [ 1, 2 ] => 'Test'
// }
// 两个数组不是同一个对象，所以获取不到实际的值。
console.log(rest.get([1, 2])); // undefined

// 使用同一个数组对象，可以获取到值
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // Test
