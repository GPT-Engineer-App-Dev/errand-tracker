document.getElementById("new-task").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");
  const task = taskInput.value.trim();

  if (task !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span class="task-text">${task}</span>
            <button class="complete-task ml-2 text-green-500" onclick="completeTask(this)"><i class="fas fa-check"></i></button>
            <button class="delete-task text-red-500" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
  }
}

function completeTask(element) {
  const taskItem = element.parentNode;
  taskItem.querySelector(".task-text").classList.toggle("line-through");
}

function deleteTask(element) {
  const taskItem = element.parentNode;
  taskItem.remove();
}
