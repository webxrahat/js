let submit = document.getElementById("add-btn");
let intField = document.getElementById("input-box");
let listItems = document.getElementById("list-items");
// console.log(intField);

submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("click");

    let list = document.createElement("li");
    list.innerText = intField.value;
    listItems.appendChild(list);

    intField.value = "";
});
