const express = require("express");
const corss = require("corss");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 3000;

// middleware
app.use(corss());
app.use(express.json());

const uri =
  "mongodb+srv://masumrezamunna2005_db_user:iGhJ48fhHggju9Sf@cluster01.tefuwz4.mongodb.net/?appName=Cluster01";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Simple Crud Server is running!");
});

app.listen(port, () => {
  console.log(`Simple Crud server is running on port ${port}`);
});
// iGhJ48fhHggju9Sf Project 01
