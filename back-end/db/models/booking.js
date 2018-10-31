/* eslint-disable */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    customer_id: DataTypes.INTEGER,
    worker_id: DataTypes.INTEGER,
    contents: DataTypes.STRING,
    status_id: DataTypes.STRING
  }, {
  	charset: 'utf8',
  	collate: 'utf8_unicode_ci'
	});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};
