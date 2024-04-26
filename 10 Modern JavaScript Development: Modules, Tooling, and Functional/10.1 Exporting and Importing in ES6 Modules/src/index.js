/**
 * 导入 addToCart 函数，和 totalPrice tq 变量。
 *
 * 函数名、变量名都必须对应上。可以使用 as 关键字修改名字。
 */
import { addToCart, totalPrice as price, tq } from "./shoppingCard.js";

addToCart("bread", 5); // 5 bread added to cart

/**
 * totalPrice “导入时”替换成 price，原 totalPrice 已经无法使用。
 * totalQuantity “导出时”替换成 tq，原 totalQuantity 已经无法使用。
 */
// console.log(totalPrice); // ReferenceError: totalPrice is not defined
// console.log(totalQuantity); // ReferenceError: totalQuantity is not defined
console.log(price, tq); // 237 23

/**
 * 全量导入模块，命名为 ShoppingCart
 */
import * as ShoppingCart from "./shoppingCard.js";

/**
 * 使用全量导入的函数、变量需要带上模块命名 ShoppingCart。
 */
ShoppingCart.addToCart("bread", 5); // 5 bread added to cart
console.log(ShoppingCart.totalPrice, ShoppingCart.tq); // 237 23

/**
 * 使用默认导入
 *
 * 因为默认导出函数没命名，这需要给函数命名 add。
 */
import add from "./shoppingCardDefault.js";

add("pizza", 2); // 2 pizza added to cart
