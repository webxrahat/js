const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/new", (req, res) => {
    res.send("New Line");
});

app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
});
