const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("task-btn");
const taskList = document.getElementById("task-list");

taskBtn.addEventListener("click", addTodo);
taskList.addEventListener("click", deleteTodo);

function addTodo(e) {
    e.preventDefault();

    //Grab Task input value
    let taskTitle = taskInput.value;

    //create list element. && add css classes
    let newTask = document.createElement("li");
    newTask.classList.add("new-task");

    //add text to new task
    newTask.innerText = taskTitle;

    //create delete button
    deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("del-task");
    newTask.appendChild(deleteBtn);

    //append new task to Task list
    taskList.appendChild(newTask);
}

function deleteTodo(e){

    let target = e.target;

    if(target.classList[0] === "del-task"){
        
        let parentTask = target.parentNode;
        parentTask.remove();
    } else {
        console.log("not task");
    }

}