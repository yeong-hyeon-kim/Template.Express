var express = require("express");
var router = express.Router();

/* GET */
router.get("/", function (req, res, next) {
  var id = req.query.id;
  var name = req.query.name;
  res.render("result", {
    title: "Express",
    id: id,
    name: name,
    method: "get",
  });
});

/* POST */
router.post("/", function (req, res, next) {
  var id = req.body.id;
  var name = req.body.name;
  res.render("result", {
    title: "Express",
    id: id,
    name: name,
    method: "post",
  });
});

module.exports = router;
