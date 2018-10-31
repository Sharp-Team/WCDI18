const express = require('express')
require('dotenv').config()

const router = express()

const user = {
  name: 'Hoa Mat Lol',
  age: -20
}

router.get('/test', (req, res) => {
  res.status(200).json(user)
})

let port = process.env.PORT
router.listen(port, () => {
  console.log(`Ahihi, Server is running on port ${port} !`)
})
