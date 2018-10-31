/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    name: DataTypes.STRING
  }, {});
  Province.associate = function(models) {
    Province.belongsTo(models.Addresses)
		Province.hasMany(models.Districts)
  };
  return Province;
};
