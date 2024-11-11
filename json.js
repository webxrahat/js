const user = {
    id: 1,
    name: "Rahat",
    address: "lalmonirhat",
    car: ["id: 1", "model: bmw", "publishYear: 2023"],
};

console.log(user);
const userJson = JSON.stringify(user);
console.log(userJson);

const parse = JSON.parse(userJson);
console.log(parse);
