const { request, response } = require("express");
const express = require("express");
const MoviesApi = require("../models/MovieModel");

const router = express.Router();

router.use((request, response, next) => {
  console.log("request user router:", request.session);
  if (!request.session.userId) {
    response.status(404).send("please login");
  } else {
    next();
  }
});

router.get("/_health", (request, response) => {
  console.log("session:", request.session);
  response.send("Movie routes are working OK");
});

router.post("/new-movie", (request, response) => {
  const requestBody = request.body;
  requestBody.userId = request.session.userId;
  MoviesApi.create(requestBody).then((data) => {
    console.log("This movie was added successfully!");
    console.log(data);
  });
  response.send("This movie was added successfully!");
});

router.get("/user", (request, response) => {
  MoviesApi.find({
    userId: request.session.userId,
  }).then((movies) => {
    response.send(movies);
  });
});

router.get("/movie-list", (request, response) => {
  MoviesApi.find()
    .then((movies) => {
      response.send(movies);
    })
    .catch(() => {
      response.status(500).send("unable to display movie-list");
    });
});

module.exports = router;
