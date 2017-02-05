var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: "Home security", frontdoor: true, backdoor: false });
  console.log('Someone visited!');
});

module.exports = router;
