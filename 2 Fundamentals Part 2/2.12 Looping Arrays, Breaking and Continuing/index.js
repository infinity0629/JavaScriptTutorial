"use strict";

const friends = ["Michael", "Steven", "Peter"];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}
// Michael
// Steven
// Peter

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    if (i > 5) break;
    console.log(i);
}
// 1
// 3
// 5
