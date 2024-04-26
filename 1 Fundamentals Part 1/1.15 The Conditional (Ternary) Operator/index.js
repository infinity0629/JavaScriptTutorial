const age = 23;
age >= 18
    ? console.log("I like to drink wine.")
    : console.log("I like to drink water."); // I like to drink wine.

const drink = age >= 18 ? "wine" : "water";
console.log(drink); // wine

/**
 * ?: 是 Expressions（表达式）
 */
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`); // I like to drink wine.
