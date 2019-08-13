'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssetTypes = sequelize.define('AssetTypes', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {});
  AssetTypes.associate = function(models) {
    // associations can be defined here
    AssetTypes.hasMany(models.Assets,{foreignKey: "assetType", sourceKey: "id"});

  };
  return AssetTypes;
};
