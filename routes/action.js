var express = require("express");
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  var age = req.query.age;
  console.log("## get request");
  res.render('action', { title: 'Express', id: id, age: age, method: "get" });
});

/* POST */
router.post('/', function(req, res, next) {
  var id = req.body.id;
  var name = req.body.name;
  console.log("## post request"); 
  res.render('action', { title: 'Express', id: id, name: name, method: "post" });
});

module.exports = router;
