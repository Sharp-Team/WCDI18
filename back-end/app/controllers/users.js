/* eslint-disable */

module.exports = {
  signUp: async (req, res, next) => {
    res.json('SignUp call !')
  },
  signIn: async (req, res, next) => {
		res.json('SignIn call !')
	},
	getAll: async (req, res, next) => {
		res.json('getAll call !')
	},
	getById: async (req, res, next) => {
		res.json('getById call !')
	}
}
