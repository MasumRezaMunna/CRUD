const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://MasumRezaMunna:JRiNIZEhnnI7uBa6@cluster0.bnkmq1v.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect()

    // add database related apis here
      app.post('/users', (req,res) =>{
        const newUser = req.body;
        console.log('user info', newUser)
      })

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
