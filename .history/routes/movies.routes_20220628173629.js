const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("../models/Movie.model");
router.get("/movies/create", (req, res, next) => {
  Celebrity.find()
    .then((response) => {
      console.log(response);
      res.render("celebrities/celebrities.hbs", { response });
    })
    .catch((error) => {
      console.log(`Error while miau ${error}`);
      next(error);
    });
  /* res.render("movies/new-movie.hbs", { Movie }); */
});
module.exports = router;
