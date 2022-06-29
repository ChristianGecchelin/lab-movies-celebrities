const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
});
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
