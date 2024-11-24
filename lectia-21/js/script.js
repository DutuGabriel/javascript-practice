import { addNewTask, handleTaskBehaviour, fillTaskList } from "./functions.js";

const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

addBtn.addEventListener("click", addNewTask);

myUL.addEventListener("click", handleTaskBehaviour);

window.addEventListener("DOMContentLoaded", fillTaskList);
