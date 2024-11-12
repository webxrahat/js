// let x = 21;
// const xx = 22;
// x = 20;

// console.log(x);

//map function
//jsonplaceholder.typicode.com/albums

function show() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((data) => {
            showMap(data);
            // console.log(data);
        });
}

function showMap(data) {
    let div = document.createElement("div");
    div.innerHTML = `
        <ul>
            ${data.map((item) => `<li>${item.title}</li>`).join("")}
        </ul>
    `;

    document.body.appendChild(div);
}

show();

//foreach function
//find function
//filter function
//include function
