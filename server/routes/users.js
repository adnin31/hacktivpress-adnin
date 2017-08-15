var express = require('express');
var router = express.Router();
var users = require('../controllers/users')

/* GET users listing. */
router.get('/', users.getUser);
router.post('/', users.createUser)

module.exports = router;
