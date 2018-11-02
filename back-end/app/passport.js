// const passport = require('passport')
// const JwtStrategy = require('passport-jwt').Strategy
// const localStrategy = require('passport-local').Strategy;
// const { ExtractJwt } = require('passport-jwt')
// const OauthGoogle = require('passport-google-plus-token');
// require('dotenv').config()

// // GOOGLE API
// passport.use('google_token', new OauthGoogle({
// 	clientID: process.env.GOOGLE_ID,
// 	clientSecret: process.env.GOOGLE_SECRET,
// }, async (accessToken, refreshToken, profile, done) => {
// 	console.log(accessToken)
// 	console.log(profile);
// }))


// // JWT
// passport.use(new JwtStrategy({
// 		jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme(process.env.HEADER_SCRET),
// 		secretOrKey: process.env.SECRET_KEY
// 	},
// 	async (payload, done) => {
// 		try {
// 			// Find user by specified in token
// 			const user = await models.User.findById(payload.sub)
// 			if (!user) {
// 				done(null, false)
// 			}

// 			done(null, user)
// 		} catch (error) {
// 			done(error, false)
// 		}
// 	},
// ))

// passport.use(new localStrategy({
// 	usernameField: 'username'
// }, async (username, password, done) => {
// 	try {
// 		const user = await models.User.findOne({
// 			"local.username": username
// 		});
// 		// If not, handle it
// 		if (!user) {
// 			return done(null, false);
// 		}
// 		// Check if the password is correct
// 		const isMatch = await models.User.isValidPassword(password);
// 		// If not, handle it
// 		if (!isMatch) {
// 			return done(null, false);
// 		}
// 		// Otherwise, return the user
// 		done(null, user);
// 	} catch (error) {
// 		done(error, false);
// 	}
// }))
