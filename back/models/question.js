const { Schema, model } = require('mongoose')

const schema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  theme: { type: String, required: true },
})

module.exports = model('Qustion', schema)
