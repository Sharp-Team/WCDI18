require('./components/users/user')
require('./components/deals/deal')

const userController = require('./components/users/userController')

// Export the server middleware
module.exports = {
  path: '/api/user',
  handler: userController
}
