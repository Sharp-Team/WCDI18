const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Deal = mongoose.model('Deal')

router.post('/create', async (req, res) => {
  try {
    const { time, job, status, object } = req.body
    const newDeal = await Deal.create({
      time,
      job,
      status,
      object
    })
    await newDeal.save()
    res.status(200).json({
      data: newDeal,
      error: null
    })
  } catch (e) {
    console.log(e)
  }
})

router.get('/list', async (req, res) => {
  try {
    await Deal.find({}, function(err, deals) {
      var dealMap = {}
      deals.forEach(function(deal) {
        dealMap[deal._id] = deal
      })
      res.send(dealMap)
    })
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
