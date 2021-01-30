const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  genre: String,
  title: String,
  decade: Number,
  academyAward: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("movie", movieSchema);
