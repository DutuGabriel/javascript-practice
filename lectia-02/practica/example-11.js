/*
Example 11 - The for loop
Write a for loop that prints numbers in ascending order to the browser console
from min to max, but only if the number is a multiple of 5.
*/

const max = 1000;
const min = 1;

for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
