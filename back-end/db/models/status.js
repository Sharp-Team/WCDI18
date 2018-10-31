/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    code: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};
