var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Node Express",
    content: "Welcome to Node.js With Express.js",
  });
});

module.exports = router;
