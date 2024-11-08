/*
## Example 3 - Array of objects

Write a function `calcTotalPrice(stones, stoneName)` that takes an array
of objects and a string with the name of the stone. The function calculates and returns the total cost
of stones with the same name, price and quantity from the object

### Code

```js
const stones = [
  { name: "Emerald", price: 1300, quantity: 4 },
  { name: "Diamond", price: 2700, quantity: 3 },
  { name: "Sapphire", price: 400, quantity: 7 },
  { name: "Rubble", price: 200, quantity: 2 },
];
```
*/

const stones = [
  { name: "Emerald", price: 2000, quantity: 21 },
  { name: "Diamond", price: 3000, quantity: 3 },
  { name: "Sapphire", price: 11000, quantity: 7 },
  { name: "Rubble", price: 140, quantity: 12 },
];

function calcTotalPrice(stones, stoneName) {
  for (const item of stones) {
    if (item.name === stoneName) {
      return item.price * item.quantity;
    }
  }

  return "The stone was not found in the list";
}

console.log(calcTotalPrice(stones, "Diamond"));
