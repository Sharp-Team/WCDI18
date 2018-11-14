const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port} !`)
})

mongoose.Promise = global.Promise
mongoose
  .connect(
    process.env.CONNECT_MONGO,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Database connected')
  })

require('./components/users/user')

const userController = require('./components/users/userController')
app.use('/user', userController)
