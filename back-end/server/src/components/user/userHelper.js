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
      username: Joi.string().min(6).max(50).required().error((username) => {
				if (username.length < 6 ) {
					return 'Tài khoản chứa ít nhất 6 kí tự'
				}
				return username
			}),
      password: Joi.string().min(6).max(50).required().error((password) => {
				if (password.length < 6) {
					return 'Mật khẩu chứa ít nhất 6 kí tư'
				}
				return password
			}),
			avatar: Joi.string().required(),  
			email: Joi.string().email().required().error(() => 'Email không hợp lệ'),
			full_name: Joi.string().required().error(() => 'Tên không hợp lệ'),
			phone_number: Joi.string().max(10).required().error((phone_number) => {
				const checkPhone = phone_number.match(/\d/g).length === 10
				if (!checkPhone) {
					return 'Số điện thoại không hợp lệ'
				}
				return phone_number
			}),
			province: Joi.string().required().error((province) => {
				if (province.length <= 0) {
					return 'Tỉnh/Thành phố không được trống'
				}
				return province
			}),
			district: Joi.string().required().error((district) => {
				if(district.length <= 0) {
					return 'Quận/Huyện không được trống'
				}
				return district
			}),
			address_detail: Joi.string().required().error((address_detail) => {
				if(address_detail.length < 5) {
					return 'Địa chỉ cụ thể không hơp lệ'
				}
				return address_detail
			}),
			object: Joi.string().required().error(() => 'Vui lòng chọn 1 trong 2 [Khách Hàng, Người Làm Việc]'),
			career: Joi.string().error((career) => {
				if (career.length <= 0) {
					return 'Nghề nghiệp không hợp lệ'
				}
				return career
			}),
			indentify_card: Joi.string()
    })
  }
}
