doSomething(); // poate fi apelata atat inaintea declararii cat si dupa
// doSomethingExpresion() // nu poate fi apelata inainte de declarare
// doSomethingArrow() // nu poate fi apelata inainte de declarare

/**
 * Function declaration
 */

function doSomething() {
  console.log("Something");
}

doSomething(); // poate fi apelata atat inaintea declararii cat si dupa

/**
 * Function expresion
 */

const doSomethingExpresion = function () {
  console.log("Something expression");
};

doSomethingExpresion();

const doSomethingArrow = () => {
  console.log("Something Arrow");
  return 5;
};

doSomethingArrow();

const result = doSomethingArrow;
console.log(result);
console.log(result());

const arrowAdd = (a, b, c) => a + b + c;
const items = [1, 2, 3, 4, 5];
let totalPrice = 0;
items.forEach((item) => (totalPrice += item));
console.log("Total price: " + totalPrice);

// Structura clasica arrow functionß
const addOne = (number) => {
  return number + 1;
};

console.log(addOne(10));

// Daca avem un singur parametru, parantezele rotunde sunt optionale

const addTwo = number => {
  return number + 2;
};

console.log(addTwo(10));

// Daca avem o singura expresie, parantezele acolade pot sa lipseasca IAR ATUNCI returnul este implicit

const addThree = number => number + 3;

console.log(addThree(10));

const addFourOnFirstItem = array => array[0] + 4;

console.log(addFourOnFirstItem([1, 2, 3]))
