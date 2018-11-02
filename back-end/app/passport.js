const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const localStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt')
const OauthGoogle = require('passport-google-plus-token');
const { UserModel } = require('../app/models')
require('dotenv').config()

// GOOGLE API
// passport.use('google_token', new OauthGoogle({
// 	clientID: process.env.GOOGLE_ID,
// 	clientSecret: process.env.GOOGLE_SECRET,
// }, async (accessToken, refreshToken, profile, done) => {
// 	console.log(accessToken)
// 	console.log(profile);
// }))


// JWT
passport.use(new JwtStrategy({
		jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme(process.env.HEADER_SCRET),
		secretOrKey: process.env.SECRET_KEY
	},
	async (payload, done) => {
		try {
			// Find user by specified in token
			const user = await UserModel.findById(payload.sub)
			if (!user) {
				done(null, false)
			}
			done(null, user)
		} catch (error) {
			done(error, false)
		}
	},
))

passport.use(new localStrategy({
	usernameField: 'username'
}, async (username, password, done) => {
	try {
		const user = await UserModel.findOne({ username })
		// If not, handle it
		console.log(user);
		if (!user) {
			return done(null, false);
		}
		// Check if the password is correct
		const isMatch = await user.isValidPassword(password);
		// If not, handle it
		if (!isMatch) {
			return done(null, false);
		}
		// Otherwise, return the user
		done(null, user);
	} catch (error) {
		done(error, false);
	}
}))
