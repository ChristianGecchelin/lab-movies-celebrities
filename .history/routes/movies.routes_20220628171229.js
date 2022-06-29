const router = require("express").Router();
router.get("/movies/create", (req, res, next) => {
  res.render("movies/new-movie.hbs");
});
module.exports = router;
