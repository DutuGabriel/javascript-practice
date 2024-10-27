/** 
## Example 9 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

function calculateAverage(...args) {
  let total = 0;

  args.forEach((element) => {
    total += element;
  });

  return total / args.length;
}

console.log(calculateAverage(5, 10, 15, 20));
console.log(calculateAverage(30, 20, 10));
console.log(calculateAverage(18, 36, 54, 12, 6));
