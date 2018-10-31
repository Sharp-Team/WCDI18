const User = require('../../db/models/user');
const bcrypt = require('bcrypt');
const { jsonHelper } = require('../helpers/index');
require('dotenv').config();

module.exports = {
	get: async (req, res) => {
		try {
			const users = await models.User.findAll({
				raw: true
			});
			if (users.length) {
				const result = jsonHelper(users, null, 200);
				res.status(200).json(result);
			} else {
				const result = jsonHelper(null, 'No User data found!', 404);
				res.status(404).json(result);
			}
		} catch (error) {
			const result = jsonHelper(null, error.message, 500);
			res.status(500).json(result);
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
				const result = jsonHelper(user, null, 200);
				res.status(200).json(result);
			} else {
				const result = jsonHelper(null, 'No User data found!', 404);
				res.status(404).json(result);
			}
		} catch (error) {
			const result = jsonHelper(null, error.message, 500);
			res.status(500).json(result);
		}
	},
	create: async (req, res) => {
		try {
			const {
				username,
				password,
				role_id,
			} = req.body;
			const salt = await bcrypt.genSalt(process.env.SALT_ROUND);
			const hashedPassword = await bcrypt.hashSync(password, salt);
			const newUser = await models.User.create({
				username,
				hashedPassword,
				role_id,
			});
			const result = jsonHelper(newUser, null, 200);
			res.status(200).json(result);
		} catch (error) {
			const result = jsonHelper(null, error.message, 500);
			res.status(500).json(result);
		}
	},
	update: async (req, res) => {
		try {
			const { password } = req.body;
			await models.User.update({ password }, {
				where: {
					id: req.params.id
				}, raw: true });
			const result = jsonHelper({ status: true }, null, 200);
			res.status(200).json(result);
		} catch (error) {
			const result = jsonHelper(null, error.message, 500);
			res.status(500).json(result);
		}
	},
	destroy: async (req, res) => {
		try {
			const user = await models.User.destroy({
				where: { id: req.params.id }});
			if (user) {
				const result = jsonHelper({ status: true }, null, 200);
				res.status(200).json(result);
			} else {
				const result = jsonHelper({ status: true }, null, 404);
				res.status(404).json(result);
			}
		} catch (error) {
			const result = jsonHelper(null, error.message, 500);
			res.status(500).json(result);
		}
	}
}
