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
				validate: {
					isEmail: true,
				},
				unique: {
      		args: true,
      		msg: 'Email address already in use!'
  			},
        type: Sequelize.STRING
      },
      avatar_image: {
				allowNull: true,
        type: Sequelize.STRING
      },
      indentify_card_image: {
				allowNull: true,
        type: Sequelize.STRING
      },
      address_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				references: {
          model: 'Addresses',
          key: 'id'
        }
      },
      role_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				references: {
          model: 'Roles',
          key: 'id'
        }
      },
      user_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				references: {
          model: 'Users',
          key: 'id'
        }
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
