"use strict";

const friends = ["Michael", "Steven", "Peter"];

/**
 * Add elements
 */
let newLength = friends.push("Jay");
console.log(friends); // [ 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); // 4

newLength = friends.unshift("John");
console.log(friends); // [ 'John', 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); // 5

/**
 * Remove elements
 */
friends.pop();
let poped = friends.pop();
console.log(poped); // Peter
console.log(friends); // [ 'John', 'Michael', 'Steven' ]

poped = friends.shift();
console.log(poped); // John
console.log(friends); // [ 'Michael', 'Steven' ]

/**
 * indexOf（找到返回索引，没找到返回 -1）
 */
console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

/**
 * includes
 */
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false

friends.push(23);
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true
