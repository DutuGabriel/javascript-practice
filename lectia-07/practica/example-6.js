/**

## Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.

```js
 */

const each = (array, callback) => {
  const newArr = [];

  array.forEach((element) => {
    newArr.push(callback(element));
  });

  return newArr;
};

console.log(each([81, 64, 49, 36, 25], (value) => value * 2));
console.log(each([81, 64, 49, 36, 25], (value) => value - 10));
console.log(each([81, 64, 49, 36, 25], (value) => Math.sqrt(value)));
console.log(each([2.7, 3.4, 12.8, 8.9, 10.6], (value) => Math.ceil(value)));
console.log(each([2.7, 3.4, 12.8, 8.9, 10.6], (value) => Math.floor(value)));
