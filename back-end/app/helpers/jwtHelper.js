require('dotenv').config();

const JWT = require('jsonwebtoken');

module.exports = {
  encode: async (user) => await JWT.sign(user, process.env.SECRET_KEY),
  decode: async (token)  => await JWT.verify(token, process.env.SECRET_KEY)
};
