const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('dotenv').config()
const routes = require('./app/routes/index')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

const user = {
  name: 'Hoa Mat Lol',
  age: -20
}

// app.use('/users', require('./app/routes/user'))

// app.get('/', (req, res) => {
//   res.status(200).json(user)
// })

let port = process.env.PORT
app.listen(port, () => {
  console.log(`Ahihi, Server is running on port ${port} !`)
})
