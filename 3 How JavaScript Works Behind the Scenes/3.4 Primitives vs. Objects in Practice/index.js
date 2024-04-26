"use strict";

let lastName = "Williams";
const oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName); // Davis Williams

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(`Before messiage: `, jessica); // Before messiage:  { firstName: 'Jessica', lastName: 'Davis', age: 27 }
console.log(`After messiage: `, marriedJessica); // After messiage:  { firstName: 'Jessica', lastName: 'Davis', age: 27 }

/**
 * Copying objects（浅复制，深复制得自行实现或者借助开源库）
 */
const jessicaAnother = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessicaAnother);
jessicaCopy.lastName = "Davis";
console.log(`Before messiage: `, jessicaAnother);
// Before messiage:  {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: [ 'Alice', 'Bob' ]
// }
console.log(`After messiage: `, jessicaCopy); // After messiage:  { firstName: 'Jessica', lastName: 'Davis', age: 27 }
// After messiage:  {
//   firstName: 'Jessica',
//   lastName: 'Davis',
//   age: 27,
//   family: [ 'Alice', 'Bob' ]
// }

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log(jessicaAnother);
// {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: [ 'Alice', 'Bob', 'Mary', 'John' ]
// }
console.log(jessicaCopy);
// {
//   firstName: 'Jessica',
//   lastName: 'Davis',
//   age: 27,
//   family: [ 'Alice', 'Bob', 'Mary', 'John' ]
// }
