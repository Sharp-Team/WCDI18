const mongoose = require('mongoose')

const newUserDetail = new mongoose.Schema({
	method: {
		type: String,
		enum: ['local', 'facebook', 'google'],
		required: true
	},
	local: {
		full_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone_number: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		district: {
			type: String,
			required: true,
		},
		address_detail: {
			type: String,
			required: true
		},
		object: {
			type: String,
			enum: ['woker', 'customer'],
			required: true
		},
		indentify_card: {
			type: String,
			required: false
		}
	},
	facebook: {
		phone_number: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		district: {
			type: String,
			required: true,
		},
		address_detail: {
			type: String,
			required: true
		},
		object: {
			type: String,
			enum: ['woker', 'customer'],
			required: true
		},
		indentify_card: {
			type: String,
			required: false
		}
	},
	google: {
		phone_number: {
			type: String,
			required: true,
		},
		province: {
			type: String,
			required: true,
		},
		district: {
			type: String,
			required: true,
		},
		address_detail: {
			type: String,
			required: true
		},
		object: {
			type: String,
			enum: ['woker', 'customer'],
			required: true
		},
		indentify_card: {
			type: String,
			required: false
		}
	}
})

const UserDetail = mongoose.model('UserDetail', newUserDetail)

module.exports = UserDetail
