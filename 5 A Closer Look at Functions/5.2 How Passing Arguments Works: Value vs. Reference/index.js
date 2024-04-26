"use strict";

const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 234523452345,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = `Mr. ${passenger.name}`;

    if (passenger.passport === 234523452345) {
        console.log("Check in"); // Check in
    } else {
        console.log("Wrong passport!");
    }
};

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 234523452345 }
