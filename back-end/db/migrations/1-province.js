/* eslint-disable */
'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Provinces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
				allowNull: false,
        type: Sequelize.STRING
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Provinces')
  }
}
