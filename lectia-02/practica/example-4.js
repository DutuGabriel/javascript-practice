/*
Write a script that compares the numbers in variables a and b.
If both values greater than 100, then print the maximum of them to the console.
Otherwise, the console should show the sum of the value b and the number 512.
*/

const a = 65;
const b = 177;

const isLarger = a > 100 && b > 100;

if (isLarger) {
  console.log(Math.max(a, b));
} else {
  console.log(b + 512);
}
