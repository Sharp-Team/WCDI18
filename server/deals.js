const express = require('express')
const app = express()
const mongoose = require('mongoose')

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

require('./components/deals/deal')
const dealController = require('./components/deals/dealController')
app.use('/api/deal', dealController)

module.exports = {
  path: '/api/deal',
  handler: dealController
}
