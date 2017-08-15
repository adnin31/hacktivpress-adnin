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
    var newArticle = new articles({
      
    })
  }


};
