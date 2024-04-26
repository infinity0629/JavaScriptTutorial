"use strict";

const num = 3884764.23;
console.log(new Intl.NumberFormat("zh-CN").format(num)); // 3,884,764.23

const options = {
    style: "currency",
    currency: "CNY",
};
console.log(new Intl.NumberFormat("zh", options).format(num)); // ¥3,884,764.23
