/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		username: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		charset: 'utf8',
		collate: 'utf8_unicode_ci'
	});
	User.associate = function (models) {
		// associations can be defined here
		// User.hasOne(models.Roles)
		// User.hasMany(models.Jobs)
	};
	
	return User;
};
