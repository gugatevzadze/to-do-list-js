//variables for task items
const numberOfTasks = document.getElementById("number-tasks");
const taskInput = document.getElementById("task-input");
const taskButton = document.getElementById("task-button");
const taskList = document.getElementById("task-list");
//list items array
let tasks = [];
//list members number update
let taskNumber = 0;

//writing a function to show the listed inputs with edit/delete buttons
const showList = function () {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    //creating list items
    let listItem = document.createElement("li");
    listItem.innerHTML = `${tasks[i]}`;
    //creating a container to put buttons in
    const container = document.createElement("div");
    container.classList.add("div-in-list");
    //edit button
    const editButton = document.createElement("button");
    editButton.classList.add("hidden-button");
    editButton.innerHTML = `<i class="fa-regular fa-pen-to-square" style="color: #000000;"</i>`;
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("hidden-button");
    deleteButton.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #fa2500;"</i>`;
    //appending the child
    listItem.appendChild(container);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    taskList.appendChild(listItem);
    //event handlers for the buttons
    editButton.addEventListener("click", () => editTask(i));
    deleteButton.addEventListener("click", () => deleteTask(i));
  }
};
//writing a function for adding the list member
const addTask = function () {
  let task = taskInput.value;
  if (task !== "") {
    //incrementing the number of tasks
    taskNumber += 1;
    numberOfTasks.textContent = taskNumber;
    //updating the list
    tasks.push(task);
    taskInput.value = "";
    //calling the function to show the list
    showList();
  }
};
//writing a function for editing button
const editTask = function (array) {
  const newTask = prompt("Edit current Task:");
  if (newTask) {
    tasks[array] = newTask;
    showList();
  }
};
//writing a function for deleting button
const deleteTask = function (array) {
  tasks.splice(array, 1);
  taskNumber -= 1;
  numberOfTasks.textContent = taskNumber;
  showList();
};
//event handlers
taskButton.addEventListener("click", addTask);
//event handler for enter key
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
