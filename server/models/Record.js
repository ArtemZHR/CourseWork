const mongoose = require('mongoose')

const { Schema } = mongoose

const Record = new Schema({
  imageNews: String,
  title: String,
  description: String,
  textNews: String

})
module.exports = mongoose.model('Record', Record)
