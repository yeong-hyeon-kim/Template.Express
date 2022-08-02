var express = require("express");
var router = express.Router();

/* GET */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Node Express.js",
    content: "Welcome to Node.js With Express.js",
  });
});

module.exports = router;
