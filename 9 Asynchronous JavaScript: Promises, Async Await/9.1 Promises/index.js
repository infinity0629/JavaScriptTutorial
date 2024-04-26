"use strict";

/**
 * https://github.com/public-apis/public-apis
 *
 * https://restcountries.com/
 */

const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMsg} ${response.status}`);
        }

        return response.json();
    });
};

const getCountryData = function (country) {
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        "Country not found"
    )
        .then((data) => {
            console.log(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour}`,
                "Country not found"
            );
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message))
        .finally(() => {
            console.log("Finally !!!");
        });
};

getCountryData("portugal");
