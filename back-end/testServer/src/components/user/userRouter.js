const express = require('express')
const userRouter = express.Router()
const userController = require('./userController')
const { schemas, validateBody } = require('./userHelper');

userRouter.post('/user/signup', validateBody(schemas.authSchema), userController.signUp)
userRouter.post('/user/signin', userController.signIn)
userRouter.get('/user/signout', userController.signOut)
userRouter.get('/user/getprofile', userController.getProfile)

module.exports = userRouter
