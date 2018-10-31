/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Jobs', {
      user_id: {
				allowNull: false,
				primaryKey: true,
        type: Sequelize.INTEGER,
				references: {
          model: 'Users',
          key: 'id'
        }
      },
      job_id: {
				allowNull: false,
				primaryKey: true,
        type: Sequelize.INTEGER,
				references: {
          model: 'Jobs',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Jobs');
  }
};
