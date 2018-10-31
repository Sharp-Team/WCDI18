const express = require('express-promise-router')
const userRouter = express()
const { validateBody, schemas } = require('../helpers/routeHelpers')

const userController = require('../controllers/users')

userRouter.post('/signup', validateBody(schemas.authSchema), userController.signUp)
userRouter.post('/signin', userController.signIn)
userRouter.get('/all', userController.getAll)
// userController.get('/user/:id', userController.getById)

module.exports = userRouter
