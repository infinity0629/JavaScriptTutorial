"use strict";

const ordersSet = new Set([
    "Pasta",
    "Pizza",
    "Pizza",
    "Risotto",
    "Pasta",
    "Pizza",
]);
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set("Samuel")); // Set(6) { 'S', 'a', 'm', 'u', 'e', 'l' }

console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

for (const order of ordersSet) {
    console.log(order);
}
// Pasta
// Pizza
// Garlic Bread

ordersSet.clear();
console.log(ordersSet); // Set(0) {}

/**
 * 数组去重
 */
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // [ 'Waiter', 'Chef', 'Manager' ]
