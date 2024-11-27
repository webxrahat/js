fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
