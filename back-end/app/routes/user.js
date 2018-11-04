const router = require('express-promise-router')();
const passport = require('passport');
const { validateBody, schemas } = require('../helpers/routerHelper');
const { userController } = require('../controllers');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
const passportConf = require('../passport');

router.route('/signup')
  .post(validateBody(schemas.authSchema), userController.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), passportSignIn, userController.signIn);

router.route('/signout')
	.get(userController.signOut)

router.route('/oauth/google')
  .post(passport.authenticate('googleToken', { session: false,scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ] }), userController.googleOAuth);

router.route('/oauth/facebook')
  .post(passport.authenticate('facebookToken', { session: false }), userController.facebookOAuth);

router.route('/secret')
  .get(passportJWT, userController.secret);

module.exports = router;
