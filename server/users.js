require('./components/users/user')
require('./components/deals/deal')
require('./components/users/userController')
require('./components/deals/dealController')

const userController = require('./components/users/userController')

// Export the server middleware
module.exports = {
  path: '/api/user',
  handler: userController
}
