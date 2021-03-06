var express = require('express');
var router = express.Router();
var articles = require('../controllers/articles')

/* GET home page. */
router.get('/', articles.getArticles);
router.post('/', articles.createArticle);
router.get('/:id', articles.getOneArticle);
router.get('/by/:category', articles.getCategory);
router.get('/users/:author', articles.getAuthor);
router.put('/:id',articles.editArticles)
router.delete('/:id',articles.deleteArticles)

module.exports = router;
