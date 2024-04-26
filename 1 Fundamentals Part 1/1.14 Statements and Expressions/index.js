/**
 * Expressions (表达式)
 *
 * 生成值
 */
3 + 4; // 生成值：7
1989; // 生成值：1989
true && false && !false; // // 生成值：false

/**
 * Statements (语句)
 *
 * 不生成值
 */
if (23 > 10) {
    // if 是 Statements。
    const str = "23 is bigger"; // "23 is bigger" 是 Expressions，const str = "23 is bigger"; 是 Statements。
}

/**
 * ${} 里只能放 Expressions 不能放 Statements。
 */
console.log(`I'm ${2024 - 1989} years old.`); // I'm 35 years old.
