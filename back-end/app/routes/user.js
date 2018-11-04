const userRouter = require('express-promise-router')();
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routerHelper');
const { userController } = require('../controllers');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
require('../passport');

userRouter.route('/signup')
  .post(validateBody(schemas.authSchema), userController.signUp);

userRouter.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignIn, userController.signIn);

userRouter.route('/signout')
	.get(userController.signOut)

userRouter.route('/oauth/google')
  .post(passport.authenticate('googleToken', { session: false,scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ] }), userController.googleOAuth);

userRouter.route('/oauth/facebook')
  .post(passport.authenticate('facebookToken', { session: false }), userController.facebookOAuth);

userRouter.route('/secret')
  .get(passportJWT, userController.secret);

module.exports = userRouter;
