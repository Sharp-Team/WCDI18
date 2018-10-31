/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ward', {
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
      district_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'District',
        //   key: 'id'
        // }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Wards');
  }
};
