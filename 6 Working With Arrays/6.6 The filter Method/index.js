"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// [
//   200,  450, -400,
//  3000, -650, -130,
//    70, 1300
// ]

const deposits = movements.filter((movement) => movement > 0);
console.log(deposits); // [ 200, 450, 3000, 70, 1300 ]

const withdrewals = movements.filter((movement) => movement < 0);
console.log(withdrewals); // [ -400, -650, -130 ]
