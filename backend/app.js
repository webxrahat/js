const express = require("express");
const app = express();
const users = require("../backend/users.json");
const port = process.env.port || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Database is runing on");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`database is runing on this port: ${port}`);
});
