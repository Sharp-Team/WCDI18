/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define('Province', {
    name: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Province.associate = function(models) {
    // Province.belongsTo(models.Addresses)
		// Province.hasMany(models.Districts)
  };
  return Province;
};
