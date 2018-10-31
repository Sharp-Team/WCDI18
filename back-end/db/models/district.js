/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    name: DataTypes.STRING,
    province_id: DataTypes.INTEGER
  }, {});
  District.associate = function(models) {
		District.belongsTo(models.Provinces)
		District.hasMany(models.Wards)
  };
  return District;
};
