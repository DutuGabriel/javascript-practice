/*Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask:
"What is the official name of JavaScript?".

If the user enters ECMAScript, then show an alert with the string "Correct!",
otherwise - "Do not know? ECMAScript!"
*/

let answer = prompt("What is the official name of JavaScript?");
const correctAnswers = "ECMAScript";

if (answer === correctAnswers) {
  alert("Correct!");
} else {
  alert("Do not know? ECMAScript!");
}
