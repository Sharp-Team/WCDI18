/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    action_code: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Permission.associate = function(models) {
    // associations can be defined here
  };
  return Permission;
};
