const User = require('./userSchema')

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
		} = req.body
		const findUser = await User.findOne({
			username
		})
		if (findUser) {
			res.status(403).json({
				data: null,
				error: `Tài khoản ${findUser.username} đã có người sử dụng`
			})
		} else {
			const newUser = await User.create({
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
			})
			await newUser.save()
			res.status(200).json({
				data: newUser,
				err: null
			})
		}

	},
	signIn: async (req, res) => {
		const {
			username,
			password
		} = req.body
		const findUser = await User.findOne({
			username
		})
		if (!findUser) {
			return res.status(403).json({
				data: null,
				error: `Tài khoản ${findUser.username} không tồn tại, vui lòng đăng ký`
			})
		}
		const isValidPass = (password === findUser.password) ? 1 : 0
		if (!isValidPass) {
			return res.status(404).json({
				data: `Mật khẩu không hợp lệ`,
				error: null
			})
		}
		return res.status(200).json({
			data: `Đăng nhập thành công, Xin chào ${findUser.full_name}`,
			error: null
		})
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
	getProfile: async (req, res) => {
		try {
			const {
				username
			} = req.body
			const findUser = await User.findOne({
				username
			})
			res.status(200).json(findUser)
		} catch (error) {
			console.log(error.message)
		}

	}
}
