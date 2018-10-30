'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Job = sequelize.define('User_Job', {
    user_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER
  }, {});
  User_Job.associate = function(models) {
    // associations can be defined here
  };
  return User_Job;
};