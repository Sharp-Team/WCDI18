'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    icon_job: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};