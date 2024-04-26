"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 找到复合条件的第一个元素停止
const firstWithdrawal = movements.find((movement) => movement < 0);
console.log(firstWithdrawal); // -400
