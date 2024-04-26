"use strict";

const whereAmI = async function (country) {
    try {
        const countryRes = await fetch(
            `https://restcountries.com/v3.1/name/${country}`
        );
        const countryData = await countryRes.json();

        const neighbour = countryData[0].borders[0];
        if (!neighbour) return;
        const neighbourRes = await fetch(
            `https://restcountries.com/v3.1/alpha/${neighbour}`
        );
        const neighbourData = await neighbourRes.json();
        console.log(neighbourData);

        return neighbourData;
    } catch (err) {
        throw err;
    }
};

// 可以使用 then 获取 Promise 里的值。但不是最优的。
// whereAmI("portugal")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Finally !!!"));

// 不能直接使用 await ！！！
// const data = await whereAmI("portugal"); // SyntaxError: await is only valid in async functions and the top level bodies of modules

(async () => {
    try {
        const data = await whereAmI("portugal");
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Finally !!!");
    }
})();
