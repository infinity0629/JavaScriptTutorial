"use strict";

/**
 * 剩余变量/参数
 *
 * 声明变量/参数使用 ... 放在变量前。
 *
 * 剩余变量/参数（Rest Parameter）与扩展操作符（Spread Operator）的主要区别：扩展操作符（Spread Operator）在 = 的右边，剩余变量/参数（Rest Parameter）在 = 左边。
 */

/**
 * 数组结构中使用
 */
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [ 1, 2, 3, 4 ]

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

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

    // 声明定义方法/函数时，使用剩余参数。（函数体内会将所有参数打包成新数组）
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// [
//   'Pizza',
//   'Pasta',
//   'Risotto',
//   'Focaccia',
//   'Bruschetta',
//   'Garlic Bread',
//   'Caprese Salad'
// ]
const [pizza, , risotto, ...otherFood] = menu;
console.log(pizza, risotto, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

/**
 * 对象解构中使用
 */
console.log(restaurant.openingHours);
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

/**
 * 声明定义方法/函数时，使用剩余参数。（函数体内会将所有参数打包成新数组）
 */
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
console.log(add(2, 3)); // 5
console.log(add(5, 3, 7, 2)); // 17

// 调用方法/函数时，使用扩展操作符解开数组。（如果不使用展开操作符与之对应，会将数组当做 1 个元素传入方法/函数）
console.log(add([23, 5, 7])); // 023,5,7 （数组被当做字符串进行计算）
console.log(add(...[23, 5, 7])); // 35

restaurant.orderPizza("mushrooms", "onion", "olivers", "spinach");
// mushrooms
// [ 'onion', 'olivers', 'spinach' ]

restaurant.orderPizza("mushrooms", ["onion", "olivers", "spinach"]);
// mushrooms
// [ [ 'onion', 'olivers', 'spinach' ] ]

restaurant.orderPizza("mushrooms", ...["onion", "olivers", "spinach"]);
// mushrooms
// [ 'onion', 'olivers', 'spinach' ]
