const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri);

async function run() {
 try {
  await client.connect();
  console.log("Connected to MongoDB");

  const userCollection = client.db("userDB").collection("users");

  app.get("/users", async (req, res) => {
   const cursor = userCollection.find();
   const result = await cursor.toArray();
   res.send(result);
  });

  app.post("/users", async (req, res) => {
   const user = req.body;
   //  console.log("new user", user);
   const result = await userCollection.insertOne(user);
   res.send(result);
  });
 } catch (error) {
  console.error("Error connecting to MongoDB:", error);
 }
}
run();

app.get("/", (req, res) => {
 res.send("This is the server running on!!!");
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
