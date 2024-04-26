"use strict";

const years = new Array(1991, 1984, 2008, 2020);
console.log(years); // [ 1991, 1984, 2008, 2020 ]

const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // [ 'Michael', 'Steven', 'Peter' ]

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3
console.log(friends[friends.length]); // undefined
console.log(friends[friends.length - 1]); // Peter

friends[2] = "Jay";
console.log(friends); // [ 'Michael', 'Steven', 'Jay' ]
// friends = ["Bob", "Alice"]; // TypeError: Assignment to constant variable.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); // ["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Steven", "Jay"]];
