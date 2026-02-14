// 1. Array that stores tasks as data (to be saved to localStorage)
let tasks = [];

// 2. Grab the three main elements from the HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// 3. Function - create the visual task elements
function createTaskElement(taskText, isCompleted) {
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
    
    // If task is completed, add the strikethrough class
    if (isCompleted) {
        taskSpan.classList.add("completed");
    }
    
    newTask.append(taskSpan);

    // Add everything to the page
    taskList.append(newTask);
    newTask.append(completeButton);
    newTask.append(delButton);

    completeButton.addEventListener("click", function () {
        // Toggle strikethrough when complete button is clicked
        taskSpan.classList.toggle("completed")

        // Find the task in the array
        const taskInArray = tasks.find(function(task) {
            return task.text === taskText;
        })

        taskInArray.completed = !taskInArray.completed;
        localStorage.setItem("todoTasks", JSON.stringify(tasks));
    })

    // Remove task when delete button is clicked
    delButton.addEventListener("click", function () {
        // Remove task when delete button is clicked
        newTask.remove();

        // Find and remove from the tasks array
        tasks = tasks.filter(function(task) {
           return task.text !== taskText;
        });
    
        // Update localStorage
        localStorage.setItem("todoTasks", JSON.stringify(tasks)); 
    })
    
    return newTask;
}

// 4. Listen for clicks on the "Add Task" button
addButton.addEventListener("click", function() {
    // Get the text the user typed
    const taskText = taskInput.value;
    
    // Add new object to the task array
    tasks.push({text: taskText, completed: false});

    // Converts task array to text and save to the localStorage labeled "todoTasks"
    localStorage.setItem("todoTasks", JSON.stringify(tasks));

    // Use the function to create the task
    createTaskElement(taskText, false);

    // Clear the input field for next task
    taskInput.value = "";
})

// 5. Load saved tasks
const savedTasks = localStorage.getItem('todoTasks');

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    
    tasks.forEach(function(task) {
        createTaskElement(task.text, task.completed);
    });
}