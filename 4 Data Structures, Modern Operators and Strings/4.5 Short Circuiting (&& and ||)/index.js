"use strict";

/**
 * ||
 * 如果遇到”真“值，直接返回该”真“值。
 * 一直到最后都取不到”真“值，返回最后的值（哪怕是”假“值）。
 *
 * 适用场景：取不到“现有值（null undefined）”或“无效值（0 "" 等）”时，提供“默认值”。
 */
console.log(3 || "Jonas"); // 3
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

/**
 * &&
 * 如果遇到”假“值，直接返回该”假“值。
 * 一直到最后都取不到”假“值，返回最后的值（哪怕是”真“值）。
 *
 * 适用场景：判断是否有方法，如果有直接调用。
 */
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas
console.log("Hello" && 23 && null && "Jonas"); // null

if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
}
// mushrooms
// [ 'spinach' ]

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// mushrooms
// [ 'spinach' ]
