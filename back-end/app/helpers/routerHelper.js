const Joi = require('joi');

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },
  schemas: {
    authSchema: Joi.object().keys({
      username: Joi.string().min(6).max(50).required(),
      password: Joi.string().min(6).max(50).required(),
			email: Joi.string().email().required(),
			full_name: Joi.string().required(),
			phone_number: Joi.string().max(10).required(),
			province: Joi.string().required(),
			district: Joi.string().required(),
			address_detail: Joi.string().required(),
			object: Joi.string().required(),
			career: Joi.string(),
			indentify_card: Joi.string(),
			type_address: Joi.string().required()
    })
  }
}
