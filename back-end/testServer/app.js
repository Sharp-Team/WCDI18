const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors');
const { userRoutes } = require('./app/routes')
require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECT_MONGO, {
	useNewUrlParser: true
})

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', userRoutes)

let port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port} !`)
})
