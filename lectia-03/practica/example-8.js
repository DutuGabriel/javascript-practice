/*
## Example 8 - Search for an element

Write a script to find the smallest number in an array. The code should work
for any array of numbers. Use a loop to solve problems.
*/

const numbers = [4, 234, 34, 10, 44, 370];
let min = numbers[0];
console.log(min); // 1

for (let i = 0; i < numbers.length; i++) {
  console.log(`${min} > ${numbers[i]}`);
  if (min > numbers[i]) {
    min = numbers[i];
  }
  console.log(min);
}

console.log("--------Final--------");
console.log("Min: ", min);

numbers.sort(function (a, b) {
  return a - b; // sortam crescator
  // return b - a; // sortam descrescator
});

console.log(numbers);
