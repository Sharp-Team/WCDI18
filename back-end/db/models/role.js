/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Role.associate = function(models) {
    // Role.hasMany(models.Permissions)
		// Role.belongsTo(models.Users)
		// Role.belongsTo(models.Permission_Roles)
  };
  return Role;
};
