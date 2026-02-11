// Store tasks as data (to be saved to localStorage)
let tasks = [];

// Grab the three main elements from the HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function - create the visual task elements
function createTaskElement(taskText) {
    // Create the elements for a new task
    const newTask = document.createElement('li');
    const delButton = document.createElement('button');
    const completeButton = document.createElement('button');

    // Style and label the delete button
    delButton.classList.add("delButton");
    delButton.textContent = "Delete";

    // Style and label the complete button
    completeButton.classList.add("completeButton");
    completeButton.textContent = "Complete";

    // Wrap task text in a span so strikethrough only affects text, not buttons
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    newTask.append(taskSpan);

    // Add everything to the page
    taskList.append(newTask);
    newTask.append(completeButton);
    newTask.append(delButton);

    // Toggle strikethrough when complete button is clicked
    completeButton.addEventListener("click", function () {
        taskSpan.classList.toggle("completed")
    })

    // Remove task when delete button is clicked
    delButton.addEventListener("click", function () {
        newTask.remove();
    })
    return newTask;
}

// Listen for clicks on the "Add Task" button
addButton.addEventListener("click", function() {
    // Get the text the user typed
    const taskText = taskInput.value;
    
    // Use the function to create the task
    createTaskElement(taskText);

    // Clear the input field for next task
    taskInput.value = "";
});