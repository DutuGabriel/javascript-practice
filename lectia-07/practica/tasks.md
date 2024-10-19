# Module 4. Lesson 7. Callbacks. Arrow functions. forEach

## Example 1 - Function callback

Write the following functions:

- `createProduct(obj, callback)` - accepts a product object without an id, and also
  callback. The function creates a product object by adding a unique identifier to it in
  property `id` and calls the callback passing it the created object.
- `logProduct(product)` - callback accepting a product object and logging it to
  console
- `logTotalPrice(product)` - callback receiving product object and logging
  the total value of the item in the console

```js
// Solution
function createProduct(partialProduct, callback) {
}

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
```

## Example 2 - Function callback

Add methods `withdraw(amount, onSuccess, onError)` to the `account` object and
`deposit(amount, onSuccess, onError)`, where the first parameter is the amount of the operation, and
second and third are callbacks.

The `withdraw` method raises onError if amount is greater than TRANSACTION_LIMIT or
this.balance, and onSuccess otherwise.
`deposit` method raises onError if amount is greater than TRANSACTION_LIMIT or less
or either zero and onSuccess otherwise.

```js
// Solution
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
  },
  deposit(amount, onSuccess, onError) {
  },
};

function handleSuccess(message) {
}
function handleError(message) {
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 3 - Function callback

Write a function `each(array, callback)` that takes as its first parameter
array, and the second - a function that will be applied to each element of the array.
The each function must return a new array whose elements will be the results
of callback call.

```js
// Solution
function each(array, callback) {
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
```

## Example 4 - Arrow functions

Make the code refactoring using arrow functions.

```js
function createProduct(partialProduct, callback) {
}

function logProduct(product) {
}

function logTotalPrice(product) {
}

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
```

## Example 5 - Arrow functions

Make the code refactoring using arrow functions.

```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
  },
  deposit(amount, onSuccess, onError) {
  },
};

function handleSuccess(message) {
}
function handleError(message) {
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.

```js
function each(array, callback) {
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
```

## Example 7 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
function logItems(items) {
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
```

## Example 8 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
function printContactsInfo({ names, phones }) {
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});
```

## Example 9 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
function calсulateAverage(...args) {
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
```
