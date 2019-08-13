'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resources = sequelize.define('Resources', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    empID: DataTypes.STRING,
    joiningDate: DataTypes.DATE,
    supervisor: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    laborCategory: DataTypes.STRING
  }, {});
  Resources.associate = function(models) {
    // associations can be defined here

    Resources.belongsToMany(models.Projects, {through: 'project_resources', as: 'projectResources', foreignKey: 'resource_ID'});
    Resources.hasMany(models.AssetAssignments, {foreignKey: 'resourceID', sourceKey: 'id'});
    Resources.hasMany(models.AssetRequests, {foreignKey: 'resourceID', sourceKey: 'id'});
  };
  return Resources;
};
