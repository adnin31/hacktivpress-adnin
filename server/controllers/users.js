var users = require('../models/users')
var hookPassword = require('../helpers/hookPassword')
var makeKey = require('../helpers/key')

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
    console.log(makeKey());
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
  }
};
