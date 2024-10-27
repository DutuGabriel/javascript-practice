/*## Example 6 - Finding the largest element

Write a function `findLargestNumber(numbers)` that looks for the largest number in
array.
*/

function findLargestNumber(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findLargestNumber([3, 9, 1, 6, 8, 2]));
console.log(findLargestNumber([102, 55, 87, 43, 90]));
console.log(findLargestNumber([9, 21, 34, 99, 18, 77]));
console.log(findLargestNumber([1001, 342, 889, 1234, 523]));
