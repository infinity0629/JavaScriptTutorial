const age = 15;
if (age >= 18) {
    console.log("Sarah can start driving license.");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years.`); // Sarah is too young. Wait another 3 years.
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); // 20
