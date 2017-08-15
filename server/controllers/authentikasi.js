var jwt = require('jsonwebtoken');
require('dotenv').config();
const users = require('../models/users')
const encryptPassword = require('../helpers/hookPassword')

// function signin(req, res){
//   users.findOne({name: req.body.name}).
//   then(data=>{
//     if (data.password === encryptPassword(req.body.password,data.key)) {
//       var token = jwt.sign({
//         _id:data._id,
//         username: data.username,
//       }.process.env.SECRET_KEY);
//       res.send(token)
//     }
//   })
// }
