const express = require("express");
const app = express();
const users = require("./users.json");
const port = process.env.port || 5000;
const cors = require("cors");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri =
    "mongodb+srv://roko:loQ5G6777kHMYW4C@cluster0.jhexa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection

        const database = client.db("usersDB");
        const userCollection = database.collection("users");
        app.get("/users", async (req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Database is runing on");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/users", (req, res) => {
    // console.log("api hiting");
    const newId = req.body;
    newId.id = users.length + 1;
    users.push(newId);

    res.send(newId);
});

app.listen(port, () => {
    console.log(`database is runing on this port: ${port}`);
});
