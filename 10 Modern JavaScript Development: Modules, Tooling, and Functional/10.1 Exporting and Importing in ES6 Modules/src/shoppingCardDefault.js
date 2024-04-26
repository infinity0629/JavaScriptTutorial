const shippingCost = 10;
const cart = [];

/**
 * 默认导出函数
 */
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
