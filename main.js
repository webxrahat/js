let newTask = document.querySelector("#new-task");
// console.log(newTask);
let form = document.querySelector("form");
// console.log(form);

let toDoUl = document.querySelector("#items");
// console.log(toDoUl);

let compelteUl = document.querySelector(".complete-list ul");
// console.log(compelteUl);

let createTask = function (task) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    label.innerHTML = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
};

let addTask = function (e) {
    e.preventDefault();
    let listItem = createTask(newTask.value);
    toDoUl.appendChild(listItem);
    newTask.value = "";
};

let addBtn = document.getElementById("btn");
let todoContainer = document.getElementsByClassName("div-container");
let inputField = document.getElementById("text-field");

console.log(addBtn, todoContainer, inputField);
