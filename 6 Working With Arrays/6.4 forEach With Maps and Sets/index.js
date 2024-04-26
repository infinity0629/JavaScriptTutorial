"use strict";

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);
console.log(currencies);
// Map(3) {
//     'USD' => 'United States dollar',
//     'EUR' => 'Euro',
//     'GBP' => 'Pound sterling'
// }
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
// Set(3) { 'USD', 'GBP', 'EUR' }
currenciesUnique.forEach(function (value, _, set) {
    console.log(`${value}: ${value}`);
});
// USD: USD
// GBP: GBP
// EUR: EUR
