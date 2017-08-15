var articles = require('../models/articles')
module.exports = {
  getArticles(req,res){
    articles.find({},(err,data)=>{
      if(!err){
        res.send(data)
      }else {
        res.send(err)
      }
    })
  },

  createArticle(req,res){
    console.log("iniii artikel"+req.body);
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


};
