"use strict";

/**
 * 数组解构
 *
 * 解构变量使用 [] 包裹。
 * 变量名自定义。
 */
const arr = [2, 3, 4];
console.log(arr); // [ 2, 3, 4 ]

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2 3 4

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
console.log(restaurant.categories); // [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

/**
 * 使用 , 跳过 element
 */
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

/**
 * 交换变量的值
 */
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

/**
 * 调用函数/方法返回多个值
 */
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

/**
 * 嵌套解构
 */
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

/**
 * 设置默认值（无法结构时会使用默认值）
 */
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
