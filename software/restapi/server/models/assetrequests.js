'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetRequests = sequelize.define('AssetRequests', {
    assetType: DataTypes.INTEGER,
    resourceID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    status: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    description: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {});
  AssetRequests.associate = function(models) {
    // associations can be defined here
    
    AssetRequests.belongsTo(models.Projects,{foreignKey: 'projectID',targetKey: 'id'});
    AssetRequests.belongsTo(models.Resources,{foreignKey: 'resourceID',targetKey: 'id'});
    AssetRequests.belongsTo(models.AssetTypes,{foreignKey: 'assetType',sourceKey: 'id'});
  };
  return AssetRequests;
};
