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
  await client.db("admin").command({ ping: 1 });
  console.log("Ping your deployment. You successfully conncted to Mongodb!!!");
 } finally {
  await client.close();
 }
}
run().catch((error) => console.error("Error connecting to servr", error));

app.get("/", (req, res) => {
 res.send("This is the server runing on!!!");
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
