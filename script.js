const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    const newTask = document.createElement('li');
    const delButton = document.createElement('button');

    delButton.classList.add("delButton");
    delButton.textContent = "Delete";

    newTask.textContent = taskText;
    taskList.append(newTask);
    newTask.append(delButton);
    taskInput.value = "";

    delButton.addEventListener("click", function () {
        newTask.remove();
    })
});