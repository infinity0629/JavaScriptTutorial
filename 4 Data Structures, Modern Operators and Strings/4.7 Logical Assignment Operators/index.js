"use strict";

/**
 * ||=
 *
 * 适用场景：取不到“现有值（null undefined）”或“无效值（0 "" NaN）”时，提供“默认值”。
 */
const rest1 = {
    name: "Capri",
    numGuests: 20,
};

const rest2 = {
    name: "Lz Piazza",
    owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1); // { name: 'Capri', numGuests: 20 }
console.log(rest2); // { name: 'Lz Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

/**
 * ??=
 *
 * * 适用场景：取不到“现有值（null undefined）”时，提供“默认值”。
 */
const rest3 = {
    name: "Capri",
    numGuests: 0,
};

const rest4 = {
    name: "Lz Piazza",
    owner: "Giovanni Rossi",
};

rest3.numGuests ??= 10;
rest4.numGuests ??= 10;
console.log(rest3); // { name: 'Capri', numGuests: 0 }
console.log(rest4); // { name: 'Lz Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

/**
 * &&=
 *
 * 适用场景：取到“现有值(不包括 0 "" NaN)“，还原为“默认值“。
 */
const rest5 = {
    name: "Capri",
    numGuests: 0,
};

const rest6 = {
    name: "Lz Piazza",
    owner: "Giovanni Rossi",
};

rest5.owner &&= "<ANONYMOUS>";
rest6.owner &&= "<ANONYMOUS>";
console.log(rest5); // { name: 'Capri', numGuests: 0 }
console.log(rest6); // { name: 'Lz Piazza', owner: '<ANONYMOUS>' }
