const { request, response } = require("express");
const express = require("express");
const MoviesApi = require("../models/MovieModel");

const router = express.Router();

router.use((request, response, next) => {
  console.log("request user router:", request.session);
  if (!request.session.user) {
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
  if (request.session.loggedIn === true) {
    const requestBody = request.body;
    MoviesApi.create(requestBody).then((data) => {
      console.log("This movie was added successfully!");
      console.log(data);
    });
    response.send("This movie was added successfully!");
  } else {
    response.status(401).send("User is not logged in!!");
  }
});

module.exports = router;
