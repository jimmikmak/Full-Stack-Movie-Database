const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");

const internalRouter = require("./routes/internalRoutes");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect("mongodb://localhost:27017/movieDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;

app.use(
  session({
    secret: "random secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());
app.use(express.json());

app.use("/internal", internalRouter);
app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);

app.listen(port, () =>
  console.log(`Movie app listening at http://localhost:${port}`)
);
