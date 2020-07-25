const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
// const todos = document.querySelectorAll("todo__item");

let enterNewTask = () => {
    todoInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let latestTask = addNewTask(todoInput.value);
            todoList.insertBefore(latestTask, todoList.childNodes[0]);
            todoInput.value = "";
        }
    });
}

let addNewTask = (text) => {
    let newTask = document.createElement("li");

    newTask.innerHTML = text;
    newTask.setAttribute("class", "todo__item");
    newTask.innerHTML += "<i class='fa fa-times'></i>";
    newTask.childNodes[1].style.display = "none";

    taskHover(newTask, newTask.childNodes[1]);
    removeTask(newTask, newTask.childNodes[1]);
    doneTask(newTask);

    return newTask;
}

let taskHover = (item, button) => {
    item.addEventListener("mouseover", function() {
        button.style.display = "block";
    });

    item.addEventListener("mouseout", function() {
        button.style.display = "none";
    });
}

let removeTask = (item, button)  => {
    button.addEventListener("click", function() {
        todoList.removeChild(item);
    })
}

let doneTask = (item) => {
    item.addEventListener("click", function (e) {
        item.classList.toggle("done");
    });
}



enterNewTask();