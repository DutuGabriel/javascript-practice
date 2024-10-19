/*
# Task 1

const technologies = ["Javascript", "Python", "CSS", "HTML"];

1. Get container element
2. Create a cycle for sorting array elements
3. Create a li tag
4. Write the text from the array inside the list items
5. Place li inside ul
6. Place ul tag with items on the page
*/

const technologies = ["Javascript", "Python", "CSS", "HTML"];
const containerEl = document.querySelector("#container");

// console.dir(containerEl);

const listEl = document.createElement("ul"); // <ul></ul>
console.dir(listEl);
containerEl.append(listEl);

// const firstElemFromList = document.createElement('li')
// firstElemFromList.innerText = technologies[0];
// listEl.append(firstElemFromList)

// for(let i = 0; i < technologies.length; i++) {
//     const li = document.createElement('li');
//     li.innerText = technologies[i]
//     listEl.append(li);
// }

// technologies.sort();
// technologies.forEach( (technology) => {
//     const li = document.createElement('li');
//     li.innerText = technology;
//     listEl.prepend(li);
// })

technologies.sort().forEach((technology) => {
  const li = document.createElement("li");
  li.innerText = technology;
  listEl.append(li);
});

/*
# Task 2

Starting from this colors array, create buttons dynamically;

1. Iterate trough the array;
2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
3. Set the text of the button
4. Add the button to the UI
*/

const colors = [
  {
    label: "Primary Button",
    color: "#ff0000",
    isPrimary: true,
  },
  {
    label: "Click Me",
    color: "#00ff00",
    isPrimary: true,
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false,
  },
];

colors.forEach((color) => {
  const buttonEl = document.createElement("button"); // <button> </button>
  containerEl.append(buttonEl);
  buttonEl.textContent = color.label;

  if (color.isPrimary) {
    buttonEl.innerHTML = `<span><a href="https://www.google.ro/">${color.label}</a></span>`;
    buttonEl.classList.add("primary-button");
    // buttonEl.className = "primary-button test";
    console.dir(buttonEl)
  } else {
    buttonEl.style.backgroundColor = color.color;
  }
});

/**
 * Test example
 */

const testQuerySelector = document.querySelector('#test');
console.dir(testQuerySelector)
// testQuerySelector.className = 'primary-button';
testQuerySelector.classList.add('primary-button');
const testQuerySelectorAll = document.querySelectorAll('#test')
console.dir(testQuerySelectorAll[0])
const testElementById = document.getElementById('test')
console.dir(testElementById)
const testElementByClassName = document.getElementsByClassName('test1')
console.dir(testElementByClassName)
const testElementByTagName = document.getElementsByTagName('div')
console.dir(testElementByTagName)