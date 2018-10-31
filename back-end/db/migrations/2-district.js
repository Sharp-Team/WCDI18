/* eslint-disable */
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('District', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
				allowNull: false,
        type: Sequelize.STRING
      },
      province_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Province',
        //   key: 'id'
        // }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Districts');
  }
};
