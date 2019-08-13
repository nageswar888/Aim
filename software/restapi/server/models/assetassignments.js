'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetAssignments = sequelize.define('AssetAssignments', {
    assetID: DataTypes.INTEGER,
    resourceID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    billable: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    createdDate: DataTypes.DATE
  }, {});
  AssetAssignments.associate = function(models) {
    // associations can be defined here
    AssetAssignments.belongsTo(models.Assets,{foreignKey: 'assetID',targetKey: 'id'});
    AssetAssignments.belongsTo(models.Resources,{foreignKey: 'resourceID',targetKey: 'id'});
    AssetAssignments.belongsTo(models.Projects,{foreignKey: 'projectID',targetKey: 'id'});
  };
  return AssetAssignments;
};
