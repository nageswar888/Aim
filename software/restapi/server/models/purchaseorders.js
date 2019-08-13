'use strict';
module.exports = (sequelize, DataTypes) => {
  const PurchaseOrders = sequelize.define('PurchaseOrders', {
    vendor: DataTypes.STRING,
    purchasedOn: DataTypes.DATE,
    status: DataTypes.STRING,
    receivedDate: DataTypes.DATE,
    assetRequestID: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  PurchaseOrders.associate = function(models) {
    // associations can be defined here
  };
  return PurchaseOrders;
};
