const {
	jwtHelper
} = require('../helpers')
const passport = require('passport')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {
	USerModel
} = require('../models')
require('dotenv').config()

module.exports = {
	signUp: async (req, res) => {
		const {
			username,
			password,
			avatar,
			email,
			full_name,
			phone_number,
			province,
			district,
			address_detail,
			object,
			career,
			indentify_card,
		} = req.body;
		// Check existed user
		const foundUser = await USerModel.findOne({
			"local.username": username
		})
		if (foundUser) {
			return res.status(403).json({
				data: null,
				error: `User ${foundUser.username} is already in use`
			})
		}
		// Create a new user
		const newUser = await USerModel.create({
			method: 'local',
			local: {
				username,
				password,
				avatar,
				email,
				full_name,
				phone_number,
				province,
				district,
				address_detail,
				object,
				career,
				indentify_card,
			}
		})
		await newUser.save()
		const token = await jwtHelper.encode(newUser)
		res.status(200).json({
			data: newUser,
			token: token,
			err: null
		})
	},
	signIn: async (req, res, next) => {
		// Generate token
		const {
			username,
			password
		} = req.body
		const findUser = await USerModel.findOne({
			"local.username": username
		})
		if (!findUser) {
			return res.status(403).json({
				data: {
					value: `User ${username} not exist in system, pls try again`,
					error: null
				},
			})
		}
		const isValidPass = (password === findUser.local.password) ? 1 : 0
		console.log(isValidPass);
		if (!isValidPass) {
			return res.status(404).json({
				data: {
					value: `Mật khẩu không hợp lệ`,
					error: null
				},
			})
		}
		const token = jwtHelper.encode(findUser);
		console.log(token);
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
	signOut: async (req, res) => {
		await delete req.session
		if (req.session == null) {
			res.status(200).json({
				data: 'logout success !',
				error: null
			})
		} else {
			res.status(200).json({
				data: null,
				error: `Can't logout ....`
			})
		}
	},
	oauthGoogle: async (req, res, next) => {
		//Generate token
		const token = jwtHelper.encode(req.user);
		res.status(200).json({
			token
		});
	},
	oauthFacebook: async (req, res, next) => {
		const token = signToken(req.user);
		res.status(200).json({
			token
		});
	},
}
