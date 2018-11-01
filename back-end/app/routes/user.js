const express = require('express')
const userRouter = express()
const bodyParser = require('body-parser')
const { userController } = require('../controllers/index')
const passport = require('passport');

userRouter.use(bodyParser.urlencoded({ extended: false }));
userRouter.use(bodyParser.json());
const passportJWT = passport.authenticate('jwt', { session: false })


userRouter.post('/signup', userController.signUp)
userRouter.post('/signin', userController.signIn)
userRouter.get('/signout', userController.signOut)
// userRouter.post('/oauth/google', userController.authGoogle)
// userRouter.post('/oauth/facebook', userController.authFacebook)
// userRouter.post('/changePassword', passportJWT, userController.changePassword)
// userRouter.put('/update/:id', passportJWT, userController.update);
// userRouter.delete('/delete/:id', passportJWT, userController.destroy);

module.exports = userRouter
