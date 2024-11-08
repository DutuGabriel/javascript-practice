/** 
## Example 8 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  nameList.forEach((name, index) => {
    console.log(`${name}: ${phoneList[index]}`);
  });
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

printContactsInfo({
  names: "Alice,Bob,Charlie,Diana",
  phones: "07123456789,07234567890,07345678901,07456789012",
});
