const { jsonHelper, jwtHelper } = require('../helpers/index')
const User = require('../../db/models/user')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
	login: async (req, res) => {
		try {
      const { username, password } = req.body
      const user = await User.findOne({ where: { username }, raw: true })
      if (!user) {
        const result = jsonHelper(null, 'No User data found!', 404)
        res.status(404).json(result)
        return
      }
      const { id, hashedPassword } = user
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword)
      if (isPasswordCorrect) {
        const token = await jwtHelper.encode({ username })
        const result = jsonHelper(token, null, 200)
        res.status(200).json(result)
      }
      else {
        const result = jsonHelper(null, 'Wrong Password', 401)
        res.status(401).json(result)
      }
    }
    catch (error) {
      const result = jsonHelper(null, error.message, 500)
      res.status(500).json(result)
    }
	},
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
