/** 
## Example 4 - Arrow functions

Make the code refactoring using arrow functions.

```js
*/

const createProduct = (partialProduct, callback) => {
  const product = {
    id: "prefix" + Date.now(),
    ...partialProduct,
  };

  callback(product);
};

const logProduct = (product) => {
  console.log(product);
};

const logTotalPrice = (product) => {
  console.log(product.price * product.quantity);
};

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
createProduct({ name: "🍊", price: 15, quantity: 10 }, logProduct);
createProduct({ name: "🍇", price: 40, quantity: 2 }, logTotalPrice);
createProduct({ name: "🍌", price: 12, quantity: 6 }, logProduct);
createProduct({ name: "🍓", price: 25, quantity: 4 }, logTotalPrice);
