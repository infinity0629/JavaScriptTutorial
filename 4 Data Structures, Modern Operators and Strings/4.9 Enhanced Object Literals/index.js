"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    // thu: { open: 12, close: 22 },
    // fri: { open: 11, close: 23 },
    // sat: { open: 0, close: 24 },

    // [] 里可以写表达式
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

    // openingHours: openingHours,

    // 对象增强字面量
    openingHours,

    // order: function (starterIndex, mainIndex) {
    //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },

    // 方法简写
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // orderDelivery: function ({
    //   starterIndex = 1,
    //   mainIndex = 0,
    //   time = "20:00",
    //   address,
    // }) {
    //   console.log(
    //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    //   );
    // },

    // 方法简写
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

    // orderPasta: function (ing1, ing2, ing3) {
    //   console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    // },

    // 方法简写
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    // orderPizza: function (mainIngredient, ...otherIngredients) {
    //   console.log(mainIngredient);
    //   console.log(otherIngredients);
    // },

    // 方法简写
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

console.log(restaurant);
// {
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
//   orderPizza: [Function: orderPizza]
// }
