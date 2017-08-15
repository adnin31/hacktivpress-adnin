var express = require('express');
var router = express.Router();
var articles = require('../controllers/articles')

/* GET home page. */
router.get('/',articles.getArticles);

module.exports = router;
