/** 
## Example 7 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

function logItems(items) {
  console.log(items);

  items.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
}

logItems(["Mango", "Banana", "Apple", "Grapes", "Peach"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋", "🍍", "🍊"]);
