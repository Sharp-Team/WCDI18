const express = require('express')
const userRouter = express.Router()
const userController = require('./userController')
const { schemas, validateBody } = require('./userHelper');

userRouter.post('/signup', validateBody(schemas.authSchema), userController.signUp)
userRouter.post('/signin', userController.signIn)
userRouter.get('/signout', userController.signOut)
userRouter.get('/getprofile', userController.getProfile)

module.exports = userRouter
