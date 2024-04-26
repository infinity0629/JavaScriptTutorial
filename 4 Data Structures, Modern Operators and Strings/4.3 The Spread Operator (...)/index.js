"use strict";

/**
 * 展开操作符
 *
 * 展开变量使用 ... 放在变量前。
 */

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];
console.log(newArr); // [ 1, 2, 7, 8, 9 ]

console.log(...newArr); // 1 2 7 8 9

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: { open: 12, close: 22 },
        fri: { open: 11, close: 23 },
        sat: { open: 0, close: 24 },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

/**
 * 展开重新放入数组中生成新的数组，有拷贝的功能。（浅拷贝）
 */
const mainMenuCopy = [...restaurant.mainMenu];
mainMenuCopy[0] = mainMenuCopy[0].toUpperCase();
console.log(restaurant.mainMenu); // [ 'Pizza', 'Pasta', 'Risotto' ]
console.log(mainMenuCopy); // [ 'PIZZA', 'Pasta', 'Risotto' ]

/**
 * 合并数组
 */
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// [
//   'Focaccia',
//   'Bruschetta',
//   'Garlic Bread',
//   'Caprese Salad',
//   'Pizza',
//   'Pasta',
//   'Risotto'
// ]

/**
 * 扩展操作符可以“直接”使用在所有可迭代的类型（OK：array string map set. NOT: object）。
 */
const str = "Samuel";
const letters = [...str, " ", "S."];
console.log(letters);
// [
//   'S', 'a',  'm',
//   'u', 'e',  'l',
//   ' ', 'S.'
// ]

console.log(...str); // S a m u e l

// 无法直接使用在 ${} 中，${} 中只能放确定的 1 个值。
// console.log(`${...str} Lau`); // SyntaxError: Unexpected token '...'
console.log(`${[...str]} Lau`); // S,a,m,u,e,l Lau

/**
 * 调用方法/函数时，使用扩展操作符解开数组。
 */
const ingredients = ["mushrooms", "aspargus", "cheese"];
restaurant.orderPasta(...ingredients); // Here is your declicious pasta with mushrooms, aspargus, cheese

/**
 * 虽然 object 不能“直接”使用扩展操作符，但是在复制 object 上可以结合 {} 使用达到复制（浅复制）对象的目的。
 */
const obj = {
    firsName: "Sam",
    lastName: "Lau",
    age: 35,
};
// console.log(...obj); // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// console.log([...obj]); // TypeError: obj is not iterable

const rewRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(rewRestaurant);
// {
//   foundedIn: 1998,
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
//   mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
//   openingHours: {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 }
//   },
//   order: [Function: order],
//   orderDelivery: [Function: orderDelivery],
//   orderPasta: [Function: orderPasta],
//   founder: 'Guiseppe'
// }

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristirante Roma";
console.log(restaurantCopy.name); // Ristirante Roma
console.log(restaurant.name); // Classico Italiano
