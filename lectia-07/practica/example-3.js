/** 
## Example 3 - Function callback

Write a function `each(array, callback)` that takes as its first parameter
array, and the second - a function that will be applied to each element of the array.
The each function must return a new array whose elements will be the results
of callback call.

```js
// Solution

*/

function each(array, callback) {
  const newArr = [];

  array.forEach((element) => {
    newArr.push(callback(element));
  });

  return newArr;
}

console.log(
  each([81, 64, 49, 36, 25], function (value) {
    return value * 2;
  })
);
console.log(
  each([81, 64, 49, 36, 25], function (value) {
    return value - 10;
  })
);
console.log(
  each([81, 64, 49, 36, 25], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([2.3, 3.7, 14.8, 6.9, 12.5], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([2.3, 3.7, 14.8, 6.9, 12.5], function (value) {
    return Math.floor(value);
  })
);
