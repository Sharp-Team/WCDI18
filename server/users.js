const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('./users/model')
const userController = require('./users/controller')
app.use('/api/user', userController)

module.exports = {
  path: '/api/user',
  handler: userController
}
