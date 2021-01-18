const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/movieDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 3000;

app.listen(port, () =>
  console.log(`Movie app listening at http://localhost:${port}`)
);
