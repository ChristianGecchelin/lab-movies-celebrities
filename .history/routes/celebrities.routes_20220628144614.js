const router = require("express").Router();

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

module.exports = router;
