require('./components/users/user')
require('./components/deals/deal')
require('./components/users/userController')
require('./components/deals/dealController')

const dealController = require('./components/deals/dealController')

// Export the server middleware
module.exports = {
  path: '/api/deal',
  handler: dealController
}
