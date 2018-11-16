const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('./components/users/user')
const userController = require('./components/users/userController')
app.use('/api/user', userController)

module.exports = {
  path: '/api/user',
  handler: userController
}
