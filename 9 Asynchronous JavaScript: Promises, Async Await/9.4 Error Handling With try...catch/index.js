"use strict";

const whereAmI = async function (country) {
    try {
        const countryRes = await fetch(
            `https://restcountries.com/v3.1/name/${country}`
        );
        const countryData = await countryRes.json();
        // console.log(countryData);

        const neighbour = countryData[0].borders[0];
        if (!neighbour) return;
        const neighbourRes = await fetch(
            `https://restcountries.com/v3.1/alpha/${neighbour}`
        );
        const neighbourData = await neighbourRes.json();
        console.log(neighbourData);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Finally !!!");
    }
};

whereAmI("portugal");
