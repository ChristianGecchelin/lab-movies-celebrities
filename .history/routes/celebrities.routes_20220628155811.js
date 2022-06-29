const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});
router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebritiesFromDB) => {
      res.redirect("/celebrities");
      console.log(`New drone created: ${celebritiesFromDB.name}.`);
    })
    .catch((error) => {
      res.render("/celebrities/new-celebrity.hbs");
      console.log(error);
    });
});
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((response) => {
      console.log(response);
      res.render("celebrities/celebrities.hbs", { response });
    })
    .catch((error) => {
      console.log(`Error while miau ${error}`);
      next(error);
    });
});
module.exports = router;
