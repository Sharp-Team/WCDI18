require('./components/users/user')

const userDAL = require('./components/users/userDAL')

// Export the server middleware
module.exports = {
  path: '/api/user',
  handler: userDAL
}
