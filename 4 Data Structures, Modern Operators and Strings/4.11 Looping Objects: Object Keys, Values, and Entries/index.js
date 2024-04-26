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

console.log(openingHours);
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }

// 对象不能直接遍历
// TypeError: openingHours is not iterable
// for (const item of openingHours) {
//     console.log(item);
// }

for (const key of Object.keys(openingHours)) {
    console.log(key);
}
// thu
// fri
// sat

for (const value of Object.values(openingHours)) {
    console.log(value);
}
// { open: 12, close: 22 }
// { open: 11, close: 23 }
// { open: 0, close: 24 }

for (const item of Object.entries(openingHours)) {
    console.log(item);
}
// [ 'thu', { open: 12, close: 22 } ]
// [ 'fri', { open: 11, close: 23 } ]
// [ 'sat', { open: 0, close: 24 } ]

for (const [key, { open, close }] of Object.entries(openingHours)) {
    console.log(key, open, close);
}
// thu 12 22
// fri 11 23
// sat 0 24
