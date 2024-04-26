"use strict";

/**
 * flat
 *
 * 将多维数组拉平为一维数组
 *
 * depth 参数为深度（不传递该参数默认拉平 1 层）
 */
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]
console.log(arrDeep.flat(1)); // [ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]
console.log(arrDeep.flat(2));
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

/**
 * flatMap
 *
 * 先 map 在 flat 数组
 */
const array = [1, 2, 3, 4];

console.log(array.flatMap((numer) => [numer, numer * 2]));
// [
//   1, 2, 2, 4,
//   3, 6, 4, 8
// ]

// 只修改元素和 flat 方法没有区别
console.log(array.flatMap((numer) => numer * 2)); // [ 2, 4, 6, 8 ]
