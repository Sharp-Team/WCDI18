/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Detail = sequelize.define('User_Detail', {
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar_image: DataTypes.STRING,
    indentify_card_image: DataTypes.STRING,
    address_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  User_Detail.associate = function(models) {
    // associations can be defined here
  };
  return User_Detail;
};
