/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ward = sequelize.define('Ward', {
    name: DataTypes.STRING,
    district_id: DataTypes.INTEGER
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Ward.associate = function(models) {
    // Ward.belongsTo(models.Districts)
  };
  return Ward;
};
