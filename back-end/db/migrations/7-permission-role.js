/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Permission_Roles', {
      permission_id: {
				allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
				references: {
          model: 'Permissions',
          key: 'id'
        }
				
      },
      role_id: {
				allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
				references: {
          model: 'Roles',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Permission_Roles');
  }
};
