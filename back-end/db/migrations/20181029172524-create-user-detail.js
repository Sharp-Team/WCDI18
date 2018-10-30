/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
				allowNull: false,
        type: Sequelize.STRING
      },
      phone_number: {
				allowNull: false,
        type: Sequelize.STRING
      },
      email: {
				allowNull: false,
        type: Sequelize.STRING
      },
      avatar_image: {
				allowNull: false,
        type: Sequelize.STRING
      },
      indentify_card_image: {
				allowNull: true,
        type: Sequelize.STRING
      },
      address_id: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      role_id: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      user_id: {
				allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('User_Details');
  }
};
