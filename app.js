const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");

// Add task on button click
addBtn.addEventListener("click", () => {
  const inputValue = taskInput.value.trim();
  if (inputValue === "") return;

  const newTask = document.createElement("li");
  newTask.textContent = inputValue;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  newTask.appendChild(delBtn);
  taskList.appendChild(newTask);

  taskInput.value = "";
});

// Handle delete functionality using event delegation
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    console.log("Task deleted");
  }
});
