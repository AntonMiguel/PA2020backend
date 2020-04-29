var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/clients', require('./clients.js')); //puesto por mí, idea sacada de video


module.exports = router;
