"use strict";

/**
 * 对象解构
 *
 * 解构变量使用 {} 包裹。
 * 变量名对应属性名，可以重命名。
 */

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

    // 方法/函数参数声明定义使用解构。
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
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Classico Italiano {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

/**
 * 重命名
 */
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Classico Italiano {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

/**
 * 设置默认值（无法结构时会使用默认值）
 */
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

/**
 * 改变变量值
 */
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// 已经定义了 a b 不能直接结构
// let { a, b } = obj; // SyntaxError: Identifier 'a' has already been declared

// {} 直接使用属于代码块， 不能给代码块赋值
// { a, b } = obj; // SyntaxError: Unexpected token '='

// 使用 () 包裹语句可达到目的。
({ a, b } = obj);
console.log(a, b); // 23 7

/**
 * 嵌套解构
 */
console.log(openingHours);
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }

const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

/**
 * 方法/函数参数声明定义使用解构。
 *
 * 调用时使用对象，对象可以直接解构。
 */
restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
    address: "Via del Sole, 21",
}); // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
