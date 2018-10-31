/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Job', {
      user_id: {
				allowNull: false,
				primaryKey: true,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'User',
        //   key: 'id'
        // }
      },
      job_id: {
				allowNull: false,
				primaryKey: true,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Job',
        //   key: 'id'
        // }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Jobs');
  }
};
