const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  genre: String,
  title: String,
  leadActor: String,
  decade: Number,
  academyAward: Boolean,
});

module.exports = mongoose.model("MovieCollection", moviesSchema);
