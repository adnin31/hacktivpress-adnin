var users = require('../models/users')

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

  }
};
