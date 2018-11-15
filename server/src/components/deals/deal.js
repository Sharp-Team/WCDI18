const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Deal = new Schema({
  time: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  object: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Deal', Deal)
