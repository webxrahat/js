const express = require("express");
const phones = require("./phones.json");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
// console.log(phones);

app.get("/", (req, res) => {
    res.send("Hello world this is ture");
});

app.get("/new", (req, res) => {
    res.send("New Line new ");
});

app.get("/phone", (req, res) => {
    res.send(phones);
});

app.get("/phone/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const signlePhone = phones.find((phone) => phone.id === id) || {};
    res.send(signlePhone);

    // console.log(id);
});

app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
});
