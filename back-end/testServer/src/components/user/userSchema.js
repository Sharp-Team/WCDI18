const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
	username: {
		type: String,
		lowercase: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	full_name: {
		type: String,
		required: true
	},
	phone_number: {
		type: String,
		required: true
	},
	province: {
		type: String,
		required: true
	},
	district: {
		type: String,
		required: true
	},
	address_detail: {
		type: String,
		required: true
	},
	object: {
		type: String,
		enum: ['customer', 'worker']
	},
	career: {
		type: String,
		required: false
	},
	indentify_card: {
		type: String,
		required: false
	},
})

// Create a model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
