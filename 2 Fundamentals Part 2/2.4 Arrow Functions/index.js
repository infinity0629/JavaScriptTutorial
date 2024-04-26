"use strict";

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991)); // 46

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1991, "Jonas")); // Jonas retires in 19 years.
console.log(yearsUntilRetirement(1980, "Bob")); // Bob retires in 8 years.
