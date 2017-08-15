var mongoose = require('mongoose')

var articlesSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

var Articles = mongoose.model('Articles', articlesSchema)

module.exports = Articles;
