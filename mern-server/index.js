const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express());

app.get("/", (req, res) => {
    res.send("This Express app is runing");
});

app.listen(port, () => {
    console.log(`This app is runing on ${port} port`);
});
