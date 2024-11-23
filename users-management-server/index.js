const express = require("express");
const app = express();
const cors = require("cors");
const users = require("../users-management-server/users.json");
const port = process.env.port || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("This server is runing on 5000 port");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
