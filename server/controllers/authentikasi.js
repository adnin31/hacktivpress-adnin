var jwt = require('jsonwebtoken');
require('dotenv').config();
const users = require('../models/user')
const encryptPassword = require('../helpers/hookPassword')

function signin(req,req){
  users.pengguna.findOne({username:req.body.username}).
  then(data=>{
    if (data.password == hookPassword) {

    }
  })
}
