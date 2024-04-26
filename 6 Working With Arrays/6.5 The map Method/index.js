"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map((movement, index) => movement * 1.1);
console.log(movements);
console.log(movementsUSD);
// [
//     200,  450, -400,
//     3000, -650, -130,
//     70, 1300
// ]
// [
//     220.00000000000003,
//     495.00000000000006,
//     -440.00000000000006,
//     3300.0000000000005,
//     -715.0000000000001,
//     -143,
//     77,
//     1430.0000000000002
// ]

const movementsDesc = movements.map((movement, index) => {
    if (movement > 0) {
        return `Movement ${index + 1} You deposited ${movement}`;
    } else {
        return `Movement ${index + 1} You withdrew ${Math.abs(movement)}`;
    }
});
console.log(movementsDesc);
// [
//     'Movement 1 You deposited 200',
//     'Movement 2 You deposited 450',
//     'Movement 3 You withdrew 400',
//     'Movement 4 You deposited 3000',
//     'Movement 5 You withdrew 650',
//     'Movement 6 You withdrew 130',
//     'Movement 7 You deposited 70',
//     'Movement 8 You deposited 1300'
// ]
