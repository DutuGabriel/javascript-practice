/*## Example 7 - Average value

Write a `calAverage()` function that takes an arbitrary number of arguments
and returns their average. All arguments will be only numbers.
*/

function calAverage() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }

  const average = total / arguments.length;

  //return total / arguments.length;

  return average;
}

console.log(calAverage(1, 2, 3, 4));
console.log(calAverage(5, 10, 15, 20, 25));
console.log(calAverage(99, 100, 101));
