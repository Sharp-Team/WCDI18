const { jwtHelper } = require('../helpers')
const passport = require('passport')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { UserModel } = require('../models')
require('dotenv').config()

module.exports = {
	signUp: async (req, res) => {
			const { username, password } = req.body;
			// Check existed user
			const foundUser = await UserModel.findOne({ username })
			if (foundUser) {
				return res.status(403).json({
					data: null,
					error: `User ${foundUser.username} is already in use`
				})
			}
			// Create a new user
			const newUser = await UserModel.create({ username, password, })
			await newUser.save()
			res.status(200).json({
				data: newUser,
				err: null
			})
	
		// Generate the token
		// const token = jwtHelper.encode(newUser);
		// Respond with token
		// res.status(200).json({ 
		// 	data: newUser,
		// 	error: null 
		// 	}
		// );
		// },
		// signIn: async (req, res) => {
		// 	try {
		//     const { username, password } = req.body
		// 		console.log(username);
		//     const user = await models.User.findOne({ where: { username }, raw: true })
		//     if (!user) {
		//       // next(null)
		//       res.status(404).json({ 
		// 				data: null,
		// 				error: `Username ${username} not exist ! Try again !`
		// 			})
		//       return
		//     }
		// 		const userPass = user.password
		// 		const isPasswordCorrect = await (password === userPass) ? 1 : 0
		// 		if (isPasswordCorrect) {
		// 			// this.session = req.session
		// 			res.status(200).json({
		// 				data: `Login success ! ` + `Hello ${user.username}`,
		// 				error: null
		// 			})
		// 			// next(null)
		// 		} else {
		// 			res.status(404).json({
		// 				data: null,
		// 				error: `Invalid password, pls try again`
		// 			})
		// 		}
		//   }
		//   catch (error) {
		//     res.status(500).json(error.message)
		//   }
		// },
		// signOut: async (req, res) => {
		// 	await delete req.session
		// 	if (req.session == null) {
		// 		res.status(200).json({
		// 		data: 'logout success !',
		// 		error: null
		// 		})
		// 	} else {
		// 		res.status(200).json({
		// 		data: null,
		// 		error: `Can't logout ....`
		// 		})
		// 	}
		// },
		// oauthGoogle: async (req, res, next) => {
		// 	//Generate token
		// 	const token = jwtHelper.encode(req.user);
		//   res.status(200).json({ token });
		// },
		// update: async (req, res) => {
		// 	try {
		// 		const {
		// 			password
		// 		} = req.body;
		// 		const id = req.params.id
		// 		await User.update({
		// 			password
		// 		}, {
		// 			where: {
		// 				id
		// 			},
		// 			raw: true
		// 		});
		// 		res.status(200).json({
		// 			status: `Updated id ${id}`
		// 		});
		// 	} catch (error) {
		// 		res.status(500).json({
		// 			message: error
		// 		});
		// 	}
		// },
		// changePassword: async (req, res) => {
		//   try {
		//     const { username, oldPassword, newPassword, confirmPassword } = req.body
		//     const { password } = await User.findOne({ where: { username }, raw: true })
		//     const isPasswordCorrect = await bcrypt.compare(oldPassword, password)
		//     if (!isPasswordCorrect) {
		//       const result = jsonHelper(null, 'Wrong Old Password', 401)
		//       res.status(401).json(result)
		//       return
		//     }
		//     if (newPassword === confirmPassword) {
		//       const salt = await bcrypt.genSalt(process.env.SALT_ROUND)
		//       const hashedPassword = await bcrypt.hash(newPassword, salt)
		//       await User.update({ password: hashedPassword }, { where: { username } })
		//       const result = jsonHelper({ status: true }, null, 200)
		//       res.status(200).json(result)
		//     }
		//     else {
		//       const result = jsonHelper(null, 'Incorrect new password', 400)
		//       res.status(200).json(result)
		//     }
		//   }
		//   catch (error) {
		//     const result = jsonHelper(null, error.message, 500)
		//     res.status(500).json(result)
		//   }
		// },

	}
}
