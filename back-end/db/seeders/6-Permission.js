/* eslint-disable */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permission', [{
        name: 'Band acc',
        action_code: 'BAND',
      }, {
				name: 'Scan around',
        action_code: 'SCAN',
			}, {
				name: 'Notification',
        action_code: 'NOTI',
			}, {
				name: 'Receive Notification',
        action_code: 'RECEI_NOTI',
			}
		], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
