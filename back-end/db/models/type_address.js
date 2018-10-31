/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type_Address = sequelize.define('Type_Address', {
    type: DataTypes.STRING
  }, {});
  Type_Address.associate = function(models) {
    // associations can be defined here
  };
  return Type_Address;
};
