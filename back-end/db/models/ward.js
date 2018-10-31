/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ward = sequelize.define('Ward', {
    name: DataTypes.STRING,
    district_id: DataTypes.INTEGER
  }, {});
  Ward.associate = function(models) {
    Ward.belongsTo(models.Districts)
  };
  return Ward;
};
