"use strict";

const lotteryPromise = new Promise((resolve, reject) => {
    console.log("Lotter draw is happening");
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve("You WIN !!!");
        } else {
            reject(new Error("You lost your money."));
        }
    }, 2000);
});

lotteryPromise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log("1 second passed");
        return wait(1);
    })
    .then(() => {
        console.log("2 second passed");
        return wait(1);
    })
    .then(() => {
        console.log("3 second passed");
        return wait(1);
    })
    .then(() => console.log("4 second passed"));
