/*## Example 1 - Object Basics

Write a script that, for the `user` object, successively:

- adds a `mood` field with value `'happy'`
- replaces the value `hobby` to `'skydiving'`
- replaces `premium` to `false`
- prints the contents of the `user` object in `key:value` format using
  `Object.keys()` and `for...of`
*/

const user = {
  name: "Luna",
  age: 25,
  hobby: "coding",
  name: "Stella",
  premium: true,
};

user.mood = "excited";
user.hobby = "surfing";
user.premium = false;
console.log(user);

// for (const key in user) {
//   console.log(`${key} - ${user[key]}`)
// }

const keys = Object.keys(user);

console.log(keys);

for (const key of keys) {
  console.log(`${key} - ${user[key]}`);
}
