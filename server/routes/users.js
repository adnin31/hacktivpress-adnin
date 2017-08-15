var express = require('express');
var router = express.Router();
var users = require('../controllers/users')
var authentikasi = require('../controllers/authentikasi')

/* GET users listing. */
router.get('/', users.getUser);
router.post('/', users.createUser)
router.post('/signin', users.signin)

module.exports = router;
