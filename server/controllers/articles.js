var articles = require('../models/articles')
function getArticles(req,res){
  articles.find({},(err,data)=>{
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function createArticle(req,res){
  console.log("ini artikel" + JSON.stringify(req.body));
  var newArticle = new articles({
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    content: req.body.content
  })
  newArticle.save((err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })
}

function getOneArticle(req, res) {
  articles.findOne({_id:req.params.id})
  .then(data=>{
    res.send(data)
  })
  .catch(err=> res.send(err))
}

function getCategory(req, res) {
  articles.find({category : req.params.category}).then(
    data=>{
      res.send(data)
    }
  ).catch(err=>{res.send(err)})
}

function getAuthor(req, res) {
  articles.find({author : req.params.author}).then(
    data=>{
      res.send(data)
    }
  ).catch(err=>{res.send(err)})
}

function editArticles(req, res) {
  articles.update({
    _id:req.params.id
  },
  {
    $set:{
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      content: req.body.content
    }
  },(err,data)=>{
    if (!err) {
      res.send(data)
    }else {
      res.send(err)
    }
  })
}
function deleteArticles(req, res) {
  articles.deleteOne({
    _id:req.params.id
  }).then(log=>{
    res.send(log)
  }).catch(err=>{res.send(err)})
}



module.exports = {getArticles,createArticle,getOneArticle,getCategory,getAuthor,editArticles,deleteArticles};
