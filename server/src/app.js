const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
require('dotenv').config()

app.use(
  session({
    secret: 'thaycacac',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
  })
)

app.use(bodyParser.json())

// const port = process.env.PORT
// app.listen(port, () => {
//   console.log(`Server is running on port ${port} !`)
// })

mongoose
  .connect(
    'mongodb://demonslight:demonslight123@ds253203.mlab.com:53203/cdi2018',
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('Database connected')
  })

require('./components/users/user')
require('./components/deals/deal')

const userController = require('./components/users/userController')
const dealController = require('./components/deals/dealController')

app.use('/api/user', userController)
app.use('/api/deal', dealController)

module.exports = {
  path: '/api/user',
  handler: userController
}
