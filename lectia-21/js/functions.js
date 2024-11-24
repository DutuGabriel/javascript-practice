import { saveTask, updateTask, deleteTask, loadTask } from "./api.js";

const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");
let currentId = 1;

function addNewTask() {
  const inputValue = myInput.value.trim();

  if (inputValue === "") {
    alert("You must write something!");
    return;
  }
  createLi(inputValue);
  myInput.value = "";
  addTaskToDB(inputValue);
}

function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement("LI");
  const liText = document.createTextNode(text);
  liEl.appendChild(liText);
  liEl.dataset.id = id;

  if (isDone) {
    liEl.className = "checked";
  }

  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function addCloseButton(li) {
  const span = document.createElement("SPAN");
  const text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
}

function handleTaskBehaviour({ target }) {
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    updateTask(target.dataset.id, target.classList.contains("checked"));
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

function addTaskToDB(text, isDone = false) {
  const newTask = { text, isDone };
  saveTask(newTask);
  currentId += 1;
}

const fillTaskList = () => {
  loadTask()
    .then((todos) => {
      todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
      console.log(todos);

      return todos;
    })
    .then((todos) => {
      currentId =
        todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
};

export { addNewTask, handleTaskBehaviour, fillTaskList };
