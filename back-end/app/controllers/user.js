const JWT = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

signToken = user => {
  return JWT.sign({
    iss: process.env.ISS,
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, process.env.JWT_SECRET);
}

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password, full_name,
				phone_number,
				province,
				district,
				address_detail,
				object,
				career,
				indentify_card,
				type_address } = req.body;
    // Check if there is a user with the same email
    const foundUser = await User.findOne({ "local.username": username });
    if (foundUser) {
      return res.status(403).json({
        data: null,
        error: `${username} is already in use`});
    }
    // Create a new user
    const newUser = new User({
      method: 'local',
      local: {
        username,
        password,
				full_name,
				phone_number,
				province,
				district,
				address_detail,
				object,
				career,
				indentify_card,
				type_address
      }
    });
    await newUser.save();
    // Generate the token
    const token = signToken(newUser);
    // Respond with token
    res.status(200).json({
      data: {
          value: `Sign up success, Welcom ${username} to our web`,
          error: null
        },
        token: token
      });
  },

  signIn: async (req, res, next) => {
    // Generate token
    const { username, password } = req.body
    const findUser = await User.findOne({ "local.username": username })
    if (!findUser) {
      return res.status(403).json({
        data: {
          value: `User ${username} not exist in system, pls try again`,
          error: null
        },
      })
    }
    const isValidPass = findUser.isValidPassword(password)
    if (!isValidPass) {
      return res.status(404).json({
      data: {
        value: `Password is not valid`,
        error: null
      },
      })
    }
    const token = signToken(req.user);
    if (token) {
      return res.status(200).json({
        data: {
          value: `log in success, Welcom ${username} to our web`,
          error: null
        },
        token: token
      })
    }
  },
	signOut: async (req, res, next) => {
		delete req.session
		if (req.session == null) {
			return res.status(200).json({
        data: {
          value: `Log out success !`,
          error: null
        },
      })
		}
	}
	,
  googleOAuth: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  facebookOAuth: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  },
  secret: async (req, res, next) => {
    console.log('I managed to get here!');
    res.json({ secret: "resource" });
  }
}
