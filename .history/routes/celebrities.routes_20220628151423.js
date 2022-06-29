const router = require("express").Router();

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});
router.post("/celebrities/create", (req, res, next) => {
  console.log("hola", req.body);
});
module.exports = router;
