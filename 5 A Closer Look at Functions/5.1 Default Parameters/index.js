"use strict";

/**
 * 默认参数值用于替代 ES 5 时候处理空数据的逻辑
 */
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES 5
    // numPassengers ||= 1;
    // price ||= 199 * numPassengers;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123"); // { flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking("LH123", 2, 800); // { flightNum: 'LH123', numPassengers: 2, price: 800 }
createBooking("LH123", 2); // { flightNum: 'LH123', numPassengers: 2, price: 398 }

/**
 * 如果想要越过参数 numPassengers 给 price 传值，可以给 numPassengers 传 undefined值
 */
createBooking("LH123", undefined, 1000); // { flightNum: 'LH123', numPassengers: 1, price: 1000 }
