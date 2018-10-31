/* eslint-disable  */
const Joi = require('Joi')

module.exports = {
	validateBody: (schema) => {
		return (req, res, next) => {
			const result = Joi.validate(req.body, schema)
			if (result.error) {
				return res.status(404).json(result.error)
			}
			if(!req.value) { req.value = {} }
			req.value['body'] = result.value
			next()
		}
	},
	schemas: {
		userSchema: Joi.object().keys({
			username: Joi.string().required(),
			password: Joi.string().required(),
		}),
	}
}
