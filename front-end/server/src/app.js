const DBConfig = require('./configuration/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(5000, () => {
  console.log(`Server started on port 5000`)
})

mongoose.Promise = global.Promise
mongoose
  .connect(
    DBConfig.dbconfig.nameDB,
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
