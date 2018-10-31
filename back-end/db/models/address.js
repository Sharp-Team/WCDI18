/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address_detail: DataTypes.STRING,
    province_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    
  };
  return Address;
};
