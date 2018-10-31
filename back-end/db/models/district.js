/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
    name: DataTypes.STRING,
    province_id: DataTypes.INTEGER
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  District.associate = function(models) {
		District.belongsTo(models.Provinces)
		District.hasMany(models.Wards)
  };
  return District;
};
