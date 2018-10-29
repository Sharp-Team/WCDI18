const express = require('express')

const router = express()

const user = {
  name: 'Hoa Mat Lol',
  age: -20
}

router.get('/api', (req, res) => {
  res.status(200).json(user)
})

router.listen(5000, () => {
  console.log(`Ahihi, Server is running !`);
})