const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const User = require('./server/src/components/user/userRouter')
require('dotenv').config()

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect(process.env.CONNECT_MONGO, {
  useNewUrlParser: true
}).then(() => {
	console.log('Connect Db')
}).catch((err) =>  console.log(err))

app.use('/user', User)

const user = {
  name: 'Hoa Mat Lol',
  age: -20
}

app.get('/', (req, res) => {
  res.status(200).json(user)
})
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port} !`)
})
