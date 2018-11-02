const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors');
const { routerUser } = require('./app/routes/index')
require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECT_MONGO)

const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', routerUser)

let port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port} !`)
})
