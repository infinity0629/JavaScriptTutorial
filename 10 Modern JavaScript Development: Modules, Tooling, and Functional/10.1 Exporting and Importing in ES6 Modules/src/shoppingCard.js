const shippingCost = 10;
const cart = [];

/**
 * 单项导出 addToCart 函数
 */
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

/**
 * 多项导出 totalPrice totalQuantity 变量
 *
 * 可以使用 as 关键字修改名字。
 */
export { totalPrice, totalQuantity as tq };
