const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri =
    "mongodb+srv://roko:loQ5G6777kHMYW4C@cluster0.jhexa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();

        const database = client.db("usersDB");
        const userCollection = database.collection("users");

        app.get("/users", async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.post("/users", async (req, res) => {
            const newUser = await req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result);
            // console.log(result);
        });

        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!!!"
        );
    } finally {
    }
}
run().catch(console.log);

app.get("/", (req, res) => {
    res.send("This Express app is runing");
});

app.listen(port, () => {
    console.log(`This app is runing on ${port} port`);
});
