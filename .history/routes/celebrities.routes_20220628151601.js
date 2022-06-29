const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});
router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  .create({ name, occupation, catchPhrase })
    /*.then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.` */
    .then(() => res.redirect("/drones"))
    .catch((error) => res.redirect("/drones/create"));
});
module.exports = router;
