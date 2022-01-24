const { Schema, model } = require('mongoose')

const schema = new Schema({
  text: { type: String, required: true },
  answer: { type: String, required: true },
})

module.exports = model('TaskQustion', schema)
