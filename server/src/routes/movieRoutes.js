const { request, response } = require("express");
const express = require("express");
const MoviesApi = require("../models/MovieModel");

const router = express.Router();

router.get("/_health", (request, response) =>
  response.send("Movie routes are working OK!")
);

router.post("/new-movie", (request, response) => {
  const requestBody = request.body;
  MoviesApi.create(requestBody).then((data) => {
    console.log("This movie was added successfully!");
    console.log(data);
  });
  response.send("This movie was added successfully!");
});

module.exports = router;
