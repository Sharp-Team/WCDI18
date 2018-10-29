'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ward = sequelize.define('Ward', {
    name: DataTypes.STRING,
    district_id: DataTypes.INTEGER
  }, {});
  Ward.associate = function(models) {
    // associations can be defined here
  };
  return Ward;
};