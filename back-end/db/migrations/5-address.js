/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_detail: {
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
      },
      type_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Type_Address',
        //   key: 'id'
        // }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};
