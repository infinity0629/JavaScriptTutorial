"use strict";

const getJSON = async function (url, errorMsg = "Something went wrong") {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${errorMsg} ${response.status}`);
    }
    return await response.json();
};

/**
 * race
 *
 * 同时发起几个请求，只获取第一个返回的结果。
 */
(async () => {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`),
    ]);
    console.log(res);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error("Request took too long!"));
        }, sec);
    });
};

(async () => {
    try {
        const res = await Promise.race([
            getJSON(`https://restcountries.com/v3.1/name/italy`),
            timeout(1),
        ]);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
})();

/**
 * allSettled
 *
 * 有多个不依赖于彼此成功完成的异步任务时，或者总是想知道每个 promise 的结果时，使用 Promise.allSettled() 。
 */
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another Success"),
]).then((res) => console.log(res));
// [
//   { status: 'fulfilled', value: 'Success' },
//   { status: 'rejected', reason: 'ERROR' },
//   { status: 'fulfilled', value: 'Another Success' }
// ]

/**
 * all
 *
 * 在任意一个传入的 promise 失败时返回失败。
 */
Promise.all([
    Promise.resolve("Success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another Success"),
])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
// ERROR

/**
 * any
 *
 * 一旦有一个 Promise 兑现，它就会立即返回，因此不会等待其他 Promise 完成。
 */
Promise.any([
    Promise.resolve("Success"),
    Promise.reject("ERROR"),
    Promise.resolve("Another Success"),
])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
