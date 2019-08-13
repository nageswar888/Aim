'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Employees.associate = function(models) {
    // associations can be defined here
  };
  return Employees;
};
