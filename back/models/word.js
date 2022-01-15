const { Schema, model } = require('mongoose')

const schema = new Schema({
  engWord: { type: String, required: true },
  uaWord: { type: String, required: true },
})

module.exports = model('Word', schema)
