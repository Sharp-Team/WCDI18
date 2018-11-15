const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')

app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
    secret: 'thaycacac',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
  })
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(5000, () => {
  console.log(`Server is running on port 5000 !`)
})

mongoose.Promise = global.Promise
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

app.use('/user', userController)
app.use('/deal', dealController)
