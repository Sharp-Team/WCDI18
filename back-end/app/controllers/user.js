const models = require('../../db/models');
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
				// const result = jsonHelper(users, null, 200);
				res.status(200).json(users);
			} else {
				// const result = jsonHelper(null, 'No User data found!', 404);
				res.status(404).json({ message: 'No User data found !' });
			}
		} catch (error) {
			// const result = jsonHelper(null, error.message, 500);
			res.status(500).json({ message: error});
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
				res.status(404).json({ message: 'No User data found !' });
			}
		} catch (error) {
			// const result = jsonHelper(null, error.message, 500);
			res.status(500).json({ message: error});
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
			// const result = jsonHelper(newUser, null, 200);
			res.status(200).json(`Created successfully user ${newUser}`);
		} catch (error) {
			res.status(500).json({ message: error});
		}
	},
	update: async (req, res) => {
		try {
			const { password } = req.body;
			const id = req.params.id
			await User.update({ password }, {
				where: { id }, raw: true });
			res.status(200).json({ status: `Updated id ${id}`});
		} catch (error) {
			res.status(500).json({ message: error});
		}
	},
	destroy: async (req, res) => {
		try {
			const id = req.params.id 
			const user = await models.User.destroy({ where: { id }});
			if (user) {
				res.status(200).json({message : `Deleted successfully user id = ${id}`});
			} else {
				res.status(404).json({ message: 'No User data found !' });
			}
		} catch (error) {
			res.status(500).json({ message: error});
		}
	}
}
