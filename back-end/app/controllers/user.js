const models = require('../../db/models');
const { jsonHelper } = require('../helpers/index');
// const JWT = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
require('dotenv').config();

// let session = null;

module.exports = {
	get: async (req, res) => {
		try {
			const users = await models.User.findAll({
				raw: true
			});
			if (users.length) {
				// const result = jsonHelper(users, null, 200);
				res.status(200).json(users);
			} else {
				// const result = jsonHelper(null, 'No User data found!', 404);
				res.status(404).json({
					message: 'No User data found !'
				});
			}
		} catch (error) {
			// const result = jsonHelper(null, error.message, 500);
			res.status(500).json({
				message: error
			});
		}
	},
	getOne: async (req, res) => {
		try {
			const user = await models.User.findOne({
				where: {
					id: req.params.id
				},
				raw: true
			});
			if (user) {
				// const result = jsonHelper(user, null, 200);
				res.status(200).json(user);
			} else {
				// const result = jsonHelper(null, 'No User data found!', 404);
				res.status(404).json({
					message: 'No User data found !'
				});
			}
		} catch (error) {
			// const result = jsonHelper(null, error.message, 500);
			res.status(500).json({
				message: error
			});
		}
	},
	// create: async (req, res) => {
	// 	try {
	// 		const {
	// 			username,
	// 			password,
	// 		} = req.body;
	// 		const salt = await bcrypt.genSalt(process.env.SALT_ROUND);
	// 		const hashedPassword = await bcrypt.hashSync(password, salt);
	// 		const newUser = await models.User.create({
	// 			username,
	// 			hashedPassword,
	// 		});
	// 		// const result = jsonHelper(newUser, null, 200);
	// 		res.status(200).json(`Created successfully user ${newUser}`);
	// 	} catch (error) {
	// 		res.status(500).json({
	// 			message: error
	// 		});
	// 	}
	// },
	update: async (req, res) => {
		try {
			const {
				password
			} = req.body;
			const id = req.params.id
			await User.update({
				password
			}, {
				where: {
					id
				},
				raw: true
			});
			res.status(200).json({
				status: `Updated id ${id}`
			});
		} catch (error) {
			res.status(500).json({
				message: error
			});
		}
	},
	destroy: async (req, res) => {
		try {
			const id = req.params.id
			const user = await models.User.destroy({
				where: {
					id
				}
			});
			if (user) {
				res.status(200).json({
					message: `Deleted successfully user id = ${id}`
				});
			} else {
				res.status(404).json({
					message: 'No User data found !'
				});
			}
		} catch (error) {
			res.status(500).json({
				message: error
			});
		}
	},
	signUp: async (req, res, next) => {
    const { username, password } = req.body;
    // Check if there is a user with the same email
    const foundUser = await models.User.findOne({ where: { username }, raw: true });
    if (foundUser) { 
      return res.status(403).json({ error: 'User is already exist'});
    }
    // Create a new user
    const newUser = await models.User.create({ 
      username,
			password,
    })
    // Generate the token
    // const token = jwtHelper.encode(newUser);
    // Respond with token
    res.status(200).json({ message: `You had been sign up successfully` });
  },
	login: async (req, res) => {
		try {
      const { username, password } = req.body
			console.log(username);
      const user = await models.User.findOne({ where: { username }, raw: true })
      if (!user) {
        // next(null)
        res.status(404).json('Username not exist ! Try again !')
        return
      }
			const userPass = user.password
			const isPasswordCorrect = await (password === userPass) ? 1 : 0
			if (isPasswordCorrect) {
				// this.session = req.session
				res.status(200).json({
					message: `Login success !` + '\n' + `Xin chao ${user.username}`
				})
				// next(null)
			} else {
				res.status(404).json({
					message: `Invalid password, pls try again`
				})
			}
      // const { hashedPassword } = user
      // const isPasswordCorrect = await bcrypt.compare(password, hashedPassword)
      // if (isPasswordCorrect) {
      //   const token = await jwtHelper.encode({ username })
      //   const result = jsonHelper(token, null, 200)
      //   res.status(200).json(result)
      // }
      // else {
      //   const result = jsonHelper(null, 'Wrong Password', 401)
      //   res.status(401).json(result)
      // }
    }
    catch (error) {
      res.status(500).json(error.message)
    }
	},
	logOut: async (req, res) => {
		const logout = req.session
		 if (logout) {
				res.status(200).json({
				success: 'true',
				message: 'user logout success !'
			})
		 }
		
		}
		// res.status(200).json({
		// 		success: 'true',
		// 		message: 'user logout success !'
		// 	})
	,
	changePassword: async (req, res) => {
    try {
      const { username, oldPassword, newPassword, confirmPassword } = req.body
      const { password } = await User.findOne({ where: { username }, raw: true })
      const isPasswordCorrect = await bcrypt.compare(oldPassword, password)
      if (!isPasswordCorrect) {
        const result = jsonHelper(null, 'Wrong Old Password', 401)
        res.status(401).json(result)
        return
      }
      if (newPassword === confirmPassword) {
        const salt = await bcrypt.genSalt(process.env.SALT_ROUND)
        const hashedPassword = await bcrypt.hash(newPassword, salt)
        await User.update({ password: hashedPassword }, { where: { username } })
        const result = jsonHelper({ status: true }, null, 200)
        res.status(200).json(result)
      }
      else {
        const result = jsonHelper(null, 'Incorrect new password', 400)
        res.status(200).json(result)
      }
    }
    catch (error) {
      const result = jsonHelper(null, error.message, 500)
      res.status(500).json(result)
    }
  }	
}
