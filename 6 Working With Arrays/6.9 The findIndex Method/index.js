"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 找到复合条件的第一个索引停止
const firstWithdrawalIndex = movements.findIndex((movement) => movement < 0);
console.log(firstWithdrawalIndex); // 2
