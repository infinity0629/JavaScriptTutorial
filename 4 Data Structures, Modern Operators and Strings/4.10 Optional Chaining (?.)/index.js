"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: { open: 12, close: 22 },
    [weekdays[4]]: { open: 11, close: 23 },
    [weekdays[5]]: { open: 0, close: 24 },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

/**
 * 属性
 */
console.log(restaurant.openingHours);
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }

console.log(restaurant.openingHours.mon); // undefined

// restaurant.openingHours.mon 是 undefined 直接调用 open 相当于 undefined.open
// console.log(restaurant.openingHours.mon.open); // TypeError: Cannot read properties of undefined (reading 'open')

console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

/**
 * 方法
 */
console.log(restaurant.order?.(0, 1) ?? "Method doe not exist"); // [ 'Focaccia', 'Pasta' ]
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doe not exist"); // Method doe not exist

/**
 * 数组
 */
const users = [{ name: "Jonas", email: "hello@jonas.com" }];
console.log(users[0]?.name ?? "User array empty"); // Jonas
