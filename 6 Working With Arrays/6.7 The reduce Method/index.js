"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((prev, cur) => prev + cur, 100);
console.log(balance); // 3940
