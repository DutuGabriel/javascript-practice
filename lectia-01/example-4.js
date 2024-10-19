/**
 * Numbers
 */

/* Display the total number of apples and grapes on the screen. The difference between apples and grapes. */

const apples = 57;
const grapes = 178;
const bananas = 27;

const total = apples + grapes + bananas;
const differenceA = grapes - apples;
const differenceB = grapes - bananas;
const differenceC = apples - bananas;

console.log(
  `${apples} mere + ${grapes} struguri + ${bananas} banane = ${total} fructe`
);
console.log(`Diferenta: ${differenceA}`);
console.log(`Diferenta: ${differenceB}`);
console.log(`Diferenta: ${differenceC}`);
