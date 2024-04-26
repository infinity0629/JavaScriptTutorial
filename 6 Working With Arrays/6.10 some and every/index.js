"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * includes / some / every 方法返回的是 boolean。（前面的查找 find 返回的是元素）
 */
console.log(movements.includes(-130)); // true

console.log(movements.some((movement) => movement === -130)); // true
console.log(movements.some((movement) => movement > 0)); // true

console.log(movements.every((movement) => movement > 0)); // false
