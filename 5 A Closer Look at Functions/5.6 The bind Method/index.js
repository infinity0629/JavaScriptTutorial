"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

const book = lufthansa.book;

/**
 * bind
 *
 * 函数对象中的方法
 *
 * 与 call 函数一样，第一个参数为函数体内的 this 需要指向的对象，后面是传递的是函数需要的其他参数。
 * 与 call函数不一样的是，bind 函数返回值是个函数，需要调用才能完成与 call 一样的效果。
 */
book.bind(eurowings, 21, "Samuel Lau")(); // Samuel Lau booked a seat on Eurowings flight EW21
console.log(eurowings);
// {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [ { flight: 'EW21', name: 'Samuel Lau' } ]
// }

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bind 返回的是函数，可以继续调用传递需要的剩余参数
bookEW(23, "Steven Williams"); // Steven Williams booked a seat on Eurowings flight EW23
console.log(eurowings);
// {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [
//     { flight: 'EW21', name: 'Samuel Lau' },
//     { flight: 'EW23', name: 'Steven Williams' }
//   ]
// }

// 剩余参数还可以分开多次次调用，直至完毕
const bookEW25 = bookEW.bind(eurowings, 25);
bookEW25("Sharon Long"); // Sharon Long booked a seat on Eurowings flight EW23
console.log(eurowings);
// {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [
//     { flight: 'EW21', name: 'Samuel Lau' },
//     { flight: 'EW23', name: 'Steven Williams' }
//     { flight: 'EW25', name: 'Sharon Long' }
//   ]
// }
