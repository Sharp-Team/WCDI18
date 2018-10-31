const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const user = {
  name: 'Hoa Mat Lol',
  age: -20
}

app.use('/users', require('./app/routes/users'))
app.get('/', (req, res) => {
  res.status(200).json(user)
})

let port = process.env.PORT
app.listen(port, () => {
  console.log(`Ahihi, Server is running on port ${port} !`)
})
