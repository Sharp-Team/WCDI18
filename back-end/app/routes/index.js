const express = require('express')
const router = express.Router()


const userRoutes = require('./user')
const authRoutes = require('./auth')

router.use('/users', userRoutes)
router.use('/auth', authRoutes)

module.exports = router
