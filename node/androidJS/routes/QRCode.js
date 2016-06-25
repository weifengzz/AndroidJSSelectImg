var express = require('express')
var router = express.Router();

/* GET users listing. */
router.use(express.static('views'));

module.exports = router;