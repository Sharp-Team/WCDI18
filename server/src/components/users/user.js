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
    type: String
  },
  avatar: {
    type: String
  },
  email: {
    type: String
  },
  full_name: {
    type: String
  },
  phone_number: {
    type: String
  },
  province: {
    type: String
  },
  district: {
    type: String
  },
  address_detail: {
    type: String
  },
  object: {
    type: String,
    enum: ['Khách hàng', 'Người làm việc']
  },
  career: {
    type: String
  },
  indentify_card: {
    type: String
  }
})

module.exports = mongoose.model('User', User)
