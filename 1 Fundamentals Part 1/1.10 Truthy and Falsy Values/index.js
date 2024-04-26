/**
 * 5 falsy values: 0, "", undefined, null, NaN
 */
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(" ")); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!"); // You should get a job!
}

let height;
if (height) {
    console.log("YAY! Height is defined.");
} else {
    console.log("Height is UNDEFINED."); // Height is UNDEFINED.
}
