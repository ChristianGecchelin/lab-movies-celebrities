const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("../models/Movie.model");
router.get("/movies/create", (req, res, next) => {
  res.render("movies/new-movie.hbs", { Movie });
});
module.exports = router;
