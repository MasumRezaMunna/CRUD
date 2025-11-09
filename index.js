const express = require("express");
const corss = require("corss");
const app = express();
const port = 3000;

// middleware
app.use(corss());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Crud Server is running!");
});

app.listen(port, () => {
  console.log(`Simple Crud server is running on port ${port}`);
});
