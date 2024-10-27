/* ## Example 2 - Destructuring

Rewrite the function so that it takes one object of the parameter instead of a set
of independent arguments.

```js

*/

function printContactsInfo(arg) {
  const { names: listOfNames, phones: listOfPhones } = arg;

  const nameList = listOfNames.split(",");
  const phoneList = listOfPhones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// printContactsInfo({
//   names:
//     "Andrei,Elena,Mihai,Ioana,Alexandra,Florin,Simona,Victor,Claudia,Marian",
//   phones:
//     "0723456789,0734567890,0745678901,0756789012,0767890123,0778901234,0789012345,0790123456,0701234567,0712345678",
// });

// Is expected
printContactsInfo({
  names:
    "Andrei,Elena,Mihai,Ioana,Alexandra,Florin,Simona,Victor,Claudia,Marian",
  phones:
    "0723456789,0734567890,0745678901,0756789012,0767890123,0778901234,0789012345,0790123456,0701234567,0712345678",
});
