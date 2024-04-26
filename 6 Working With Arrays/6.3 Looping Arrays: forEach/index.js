"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * for of / forEach 都可以用来遍历数组。
 *
 * 唯一不一样的地方在于，for of 可以使用 break 跳出循环，forEach 则不行。
 */

console.log("--------- FOR OF ---------");
for (const [index, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${index + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
    }
}
// --------- FOR OF ---------
// Movement 1 You deposited 200
// Movement 2 You deposited 450
// Movement 3 You withdrew 400
// Movement 4 You deposited 3000
// Movement 5 You withdrew 650
// Movement 6 You withdrew 130
// Movement 7 You deposited 70
// Movement 8 You deposited 1300

console.log("--------- FOREACH ---------");
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
    }
});
// --------- FOREACH ---------
// Movement 1 You deposited 200
// Movement 2 You deposited 450
// Movement 3 You withdrew 400
// Movement 4 You deposited 3000
// Movement 5 You withdrew 650
// Movement 6 You withdrew 130
// Movement 7 You deposited 70
// Movement 8 You deposited 1300
