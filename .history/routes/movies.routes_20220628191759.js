const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("../models/Movie.model");
router.get("/movies/create", (req, res, next) => {
  Celebrity.find()
    .then((response) => {
      console.log(response);
      res.render("movies/new-movie", { response });
    })
    .catch((error) => {
      console.log(`Error while miau ${error}`);
      next(error);
    });
  /* res.render("movies/new-movie.hbs", { Movie }); */
});
router.post("/movies/create", (req, res, next) => {
  const { name, genre, plot, cast } = req.body;
  Movie.create({ name, genre, plot, cast })
    .then((movieFromDB) => {
      res.redirect("/movies");
      console.log(`New movie created: ${movieFromDB.name}.`);
    })
    .catch((error) => {
      res.render("/celebrities/new-movie.hbs");
      console.log(error);
    });
});
router.get("/movies", (req, res, next) => {
  Movie.find()
    .populate("cast")
    .then((response) => {
      console.log(response);
      res.render("movies/movies.hbs", { response });
    })
    .catch((error) => {
      console.log(`Error while miau ${error}`);
      next(error);
    });
});
router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id);
});
module.exports = router;
