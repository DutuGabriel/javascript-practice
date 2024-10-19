/*
## Example 4 -Arrays and Loops

Write a script that prints the user's name and phone number to the console.

The `names` and `phones` variables store strings of names and phone numbers,
separated by commas. The sequence number of names and phone numbers in the lines indicates a match.
 The number of names and phone numbers is guaranteed to be the same.
*/

const names = "Andrei, Ioana, Vlad, Maria, Mihai, Elena, Radu, Alina";
const phones =
  "0721123456, 0723987654, 0744234567, 0765876543, 0722345678, 0746654321, 0721567890, 0755432109";

const arrayOfNames = names.split(",");
const arrayOfPhones = phones.split(",");

console.log(arrayOfNames);
console.log(arrayOfPhones);

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(`${arrayOfNames[i]} - ${arrayOfPhones[i]}`);
}
