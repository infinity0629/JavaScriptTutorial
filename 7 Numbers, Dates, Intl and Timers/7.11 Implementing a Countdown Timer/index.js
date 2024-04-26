"use strict";

const startLogOutTimer = () => {
    let time = 10;

    const timer = setInterval(() => {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        console.log(`${min}:${sec}`);

        time--;

        if (time < 0) {
            clearInterval(timer);
        }
    }, 1000);
};

startLogOutTimer();
