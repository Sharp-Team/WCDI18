const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create a schema
const User = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  address_detail: {
    type: String,
    required: true
  },
  object: {
    type: String,
    enum: ['Khách hàng', 'Người làm việc']
  },
  career: {
    type: String,
    required: false
  },
  indentify_card: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('User', User)
