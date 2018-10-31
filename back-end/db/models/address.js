/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address_detail: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Address.associate = function(models) {
    
  };
  return Address;
};
