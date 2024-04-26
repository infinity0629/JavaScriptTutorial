"use strict";

/**
 * 使用数组的数组创建 map
 *
 * 过程：
 * 外层数组 length 对应 map 的 size
 * 里层数组第一个元素是 key， 第二个元素是 value
 */
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct!!!"],
    [false, "Try again!"],
]);
console.log(question);
// Map(7) {
//   'question' => 'What is the best programming language in the world?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JavaScript',
//   'correct' => 3,
//   true => 'Correct!!!',
//   false => 'Try again!'
// }

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
 * 使用对象创建 map
 *
 * 最后对象的字段名为 map 的 key，字段值为 map 的 value。
 *
 * 过程：
 * 先调用 Object.entries 方法将对象转换成数组的数组，再使用数组的数组创建 map。
 * 外层数组 length 对应 map 的 size
 * 里层数组第一个元素是 key， 第二个元素是 value
 */
console.log(openingHours);
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }
console.log(Object.entries(openingHours));
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Map(3) {
//   'thu' => { open: 12, close: 22 },
//   'fri' => { open: 11, close: 23 },
//   'sat' => { open: 0, close: 24 }
// }

/**
 * Quiz Example
 */
console.log(question);
// Map(7) {
//   'question' => 'What is the best programming language in the world?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JavaScript',
//   'correct' => 3,
//   true => 'Correct!!!',
//   false => 'Try again!'
// }

console.log(question.get("question")); // What is the best programming language in the world?

/**
 * 遍历 map
 */
for (const item of question) {
    console.log(item);
}
// [ 1, 'C' ]
// [ 2, 'Java' ]
// [ 3, 'JavaScript' ]
// [ 'correct', 3 ]
// [ true, 'Correct!!!' ]
// [ false, 'Try again!' ]

for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}
// Answer 1: C
// Answer 2: Java
// Answer 3: JavaScript

const answer = 3;
console.log(question.get(question.get("correct") === answer)); // Correct!!!

/**
 * map 使用扩展操作符（转换数组）
 */
// map 扩展后每个键值对组建成一个新的数组
console.log(...question); // [ 'question', 'What is the best programming language in the world?' ] [ 1, 'C' ] [ 2, 'Java' ] [ 3, 'JavaScript' ] [ 'correct', 3 ] [ true, 'Correct!!!' ] [ false, 'Try again!' ]
// 将扩展后每个键值对组建成一个新的数组，组合成数组的数组
console.log([...question]);
// [
//   [ 'question', 'What is the best programming language in the world?' ],
//   [ 1, 'C' ],
//   [ 2, 'Java' ],
//   [ 3, 'JavaScript' ],
//   [ 'correct', 3 ],
//   [ true, 'Correct!!!' ],
//   [ false, 'Try again!' ]
// ]

console.log(...question.keys()); // question 1 2 3 correct true false
console.log([...question.keys()]); // [ 'question', 1, 2, 3, 'correct', true, false ]

console.log(...question.values()); // What is the best programming language in the world? C Java JavaScript 3 Correct!!! Try again!
console.log([...question.values()]);
// [
//   'What is the best programming language in the world?',
//   'C',
//   'Java',
//   'JavaScript',
//   3,
//   'Correct!!!',
//   'Try again!'
// ]

/**
 * map 转换回数组的数组，无需调用 entries 方法，直接使用 map 即可。
 *
 * 结论：直接使用 map 和 调用 entries 方法后使用 map 是一样的效果。（不推荐调用 entries 方法 ！！！）
 */
console.log(question);
// Map(7) {
//   'question' => 'What is the best programming language in the world?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JavaScript',
//   'correct' => 3,
//   true => 'Correct!!!',
//   false => 'Try again!'
// }
console.log(question.entries());
// [Map Entries] {
//   [ 'question', 'What is the best programming language in the world?' ],
//   [ 1, 'C' ],
//   [ 2, 'Java' ],
//   [ 3, 'JavaScript' ],
//   [ 'correct', 3 ],
//   [ true, 'Correct!!!' ],
//   [ false, 'Try again!' ]
// }
console.log(...question.entries()); // [ 'question', 'What is the best programming language in the world?' ] [ 1, 'C' ] [ 2, 'Java' ] [ 3, 'JavaScript' ] [ 'correct', 3 ] [ true, 'Correct!!!' ] [ false, 'Try again!' ]
console.log([...question.entries()]);
// [
//   [ 'question', 'What is the best programming language in the world?' ],
//   [ 1, 'C' ],
//   [ 2, 'Java' ],
//   [ 3, 'JavaScript' ],
//   [ 'correct', 3 ],
//   [ true, 'Correct!!!' ],
//   [ false, 'Try again!' ]
// ]
