/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'User',
        //   key: 'id'
        // }
      },
      worker_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'User',
        //   key: 'id'
        // }
      },
      contents: {
				allowNull: false,
        type: Sequelize.STRING
      },
      status_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Status',
        //   key: 'id'
        // }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};
