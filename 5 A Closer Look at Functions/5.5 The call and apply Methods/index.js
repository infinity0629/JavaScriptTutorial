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

lufthansa.book(239, "Jonas Schmedtmann"); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, "John Smith"); // John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa);
// {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [
//     { flight: 'LH239', name: 'Jonas Schmedtmann' },
//     { flight: 'LH635', name: 'John Smith' }
//   ],
//   book: [Function: book]
// }

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

/**
 * call
 *
 * 函数对象中的方法
 *
 * 第一个参数为函数体内的 this 需要指向的对象。
 */

// 调用 book 函数时，函数体内的 this 没有指向的对象。
// book(23, "Sarah Williams"); // TypeError: Cannot read properties of undefined (reading 'airline')

book.call(eurowings, 23, "Sarah Williams"); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings);
// {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [ { flight: 'EW23', name: 'Sarah Williams' } ]
// }

book.call(lufthansa, 239, "Mary Cooper"); // Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa);
// {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [
//     { flight: 'LH239', name: 'Samuel Lau' },
//     { flight: 'LH635', name: 'Sharon Long' },
//     { flight: 'LH239', name: 'Mary Cooper' }
//   ],
//   book: [Function: book]
// }

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Mary Cooper"); // Mary Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss);
// {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [ { flight: 'LX583', name: 'Mary Cooper' } ]
// }

/**
 * apply （与 call 函数使用方法类似）
 *
 * 函数对象中的方法
 *
 * 与 call 函数一样，第一个参数为函数体内的 this 需要指向的对象；第二个参数与 call 函数不一样的是要传入的数组。
 */
const flightData = [583, "George Cooper"];

// 该方法已经抛弃，使用 call 方法。如果有数组参数，可以配合展开操作符（...）完成操作。
// book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583
book.call(swiss, ...flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss);
// {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [
//     { flight: 'LX583', name: 'Mary Cooper' },
//     { flight: 'LX583', name: 'George Cooper' }
//   ]
// }
