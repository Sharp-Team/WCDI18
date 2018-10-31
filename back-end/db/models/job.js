/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    icon_job: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Job.associate = function(models) {
    
  };
  return Job;
};
