const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  genre: String,
  leadActor: String,
  decade: String,
  academyAward: Boolean,
});

module.exports = mongoose.model("MovieCollection", moviesSchema);
