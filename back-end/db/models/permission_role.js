'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission_Role = sequelize.define('Permission_Role', {
    permission_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {});
  Permission_Role.associate = function(models) {
    // associations can be defined here
  };
  return Permission_Role;
};