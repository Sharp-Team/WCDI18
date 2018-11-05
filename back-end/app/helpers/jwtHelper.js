require('dotenv').config();

const JWT = require('jsonwebtoken');

module.exports = {
  encode: async (user) => await JWT.sign({
			iss: process.env.ISS,
			sub: user._id,
			iat: new Date().getTime(), // current time
			exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
		}, process.env.SECRET_KEY),
  decode: async (token)  => await JWT.verify(token, process.env.SECRET_KEY),
}

