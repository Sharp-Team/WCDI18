/* eslint-disable */
const timenow = require('../../app/helpers/timeNow');
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      username: 'demonslight',
      password: 'demonslight123',
			createdAt: timenow,
			updatedAt: timenow
	  }, {
			username: 'thaycacac',
      password: 'camonem123',
			createdAt: timenow,
			updatedAt: timenow
		}, {
			username: 'ducpv',
      password: 'linhcancer123',
			createdAt: timenow,
			updatedAt: timenow
		}, {
			username: 'hoapn',
      password: 'camonem123',
			createdAt: timenow,
			updatedAt: timenow
		}, {
			username: 'hiepdq',
      password: 'hongvan123',
			createdAt: timenow,
			updatedAt: timenow
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
