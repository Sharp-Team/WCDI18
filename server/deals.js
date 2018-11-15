require('./components/users/user')
require('./components/deals/deal')

const dealController = require('./components/deals/dealController')

// Export the server middleware
module.exports = {
  path: '/api/deal',
  handler: dealController
}
