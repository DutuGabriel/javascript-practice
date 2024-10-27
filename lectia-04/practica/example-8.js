/*
## Example 8 - Time Formatting

Write a function `formatTime(minutes)` that will translate the value of `minutes`
(number of minutes) to a string in hour and minute format `HH:MM`.
*/

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);

  const result = `${doubleDigitHours}:${doubleDigitMinutes}`;

  return result;
}

console.log(formatTime(90));
console.log(formatTime(580));
console.log(formatTime(200));
