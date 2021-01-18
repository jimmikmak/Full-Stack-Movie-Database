const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movieDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const port = 3000;

const internalRouter = require("./routes/internalRoutes");
const movieRouter = require("./routes/movieRoutes");

app.use(express.json());
app.use("/internal", internalRouter);
app.use("/movies", movieRouter);

app.listen(port, () =>
  console.log(`Movie app listening at http://localhost:${port}`)
);
