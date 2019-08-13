'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define('Assets', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    assetType: DataTypes.INTEGER,
    modal: DataTypes.STRING,
    yearOfManufacture: DataTypes.STRING,
    warrantyExpireDate: DataTypes.DATE,
    description: DataTypes.STRING,
    subscriptionType: DataTypes.STRING,
    tag: DataTypes.STRING,
    invoiceLineItemID: DataTypes.INTEGER,
    createdDate: DataTypes.DATE
  }, {});
  Assets.associate = function(models) {
    // associations can be defined here
    Assets.belongsTo(models.AssetTypes,{foreignKey: "assetType", sourceKey: "assetType",targetKey: "id"});
    Assets.hasMany(models.AssetAssignments);
    Assets.hasOne(models.InvoiceLineItems);
  };
  return Assets;
};
