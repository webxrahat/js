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
    // console.log("api hiting");

    res.send(users);
});

app.post("/users", (req, res) => {
    console.log("api hiting");

    console.log(req.send);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
