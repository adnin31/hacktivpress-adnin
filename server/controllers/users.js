var users = require('../models/users')
var hookPassword = require('../helpers/hookPassword')
var makeKey = require('../helpers/key')
var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  getUser(req,res){
    users.find({},(err,data)=>{
      if (!err) {
        res.send(data)
      }else {
        res.send(err)
      }
    })
  },

  createUser(req,res){
    var newKey = makeKey()
    var newPassword = hookPassword(req.body.password, newKey)

    newUser = new users({
      name : req.body.name,
      password : newPassword,
      key : newKey
    })

    newUser.save((err,data)=>{
      if(!err){
        res.send(data)
      }else {
        res.status(500).send(err)
      }
    })
  },

  signin(req, res){
    users.findOne({name: req.body.name}).
    then(data=>{
      if (data.password == hookPassword(req.body.password, data.key)) {
        var token = jwt.sign({
          _id: data._id,
          name: data.name
        },process.env.SECRET_KEY);
        res.send(token)
      }
    })
  }

};
