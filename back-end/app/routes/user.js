const express = require('express')
const userRouter = express()
const bodyParser = require('body-parser')
const { userController } = require('../controllers')
const { routerHelper } = require('../helpers');
// const passport = require('passport');
// require('../passport'); // TO load token

// const passportSignIn = passport.authenticate('local', { session: false });
userRouter.use(bodyParser.urlencoded({ extended: false }));
userRouter.use(bodyParser.json());
// const passportJWT = passport.authenticate('jwt', { session: false })


userRouter.route('/signup')
	.post( routerHelper.validateBody(routerHelper.schemas.authSchema), userController.signUp)

// userRouter.route('/signin')
//   .post(routerHelper.validateBody(routerHelper.schemas.authSchema), passportSignIn, userController.signIn);

// userRouter.route('/oauth/google')
//   .post(passport.authenticate('googleToken', { session: false }), userController.googleOAuth);

// userRouter.route('/oauth/facebook')
//   .post(passport.authenticate('facebookToken', { session: false }), userController.facebookOAuth);

module.exports = userRouter
