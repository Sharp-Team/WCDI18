/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
				allowNull: false,
				unique: true,
        type: Sequelize.STRING
      },
      password: {
				allowNull: false,
        type: Sequelize.STRING
      },
			role_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Role',
        //   key: 'id'
        // }
			},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
