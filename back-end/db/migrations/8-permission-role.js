/* eslint-disable */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Permission_Role', {
      permission_id: {
				allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Permission',
        //   key: 'id'
        // }
      },
      role_id: {
				allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
				// references: {
        //   model: 'Role',
        //   key: 'id'
        // }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Permission_Roles');
  }
};
