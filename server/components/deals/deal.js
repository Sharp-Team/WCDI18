const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Deal = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true
  },
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
    enum: ['Hoàn thành', 'Hủy'],
    required: true
  },
  object: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Deal', Deal, 'Deal')
