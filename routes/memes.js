var express = require('express');
var router = express.Router();

var memeImages = require('../models/data.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('memes', { memeList: memeImages });
});

module.exports = router;
