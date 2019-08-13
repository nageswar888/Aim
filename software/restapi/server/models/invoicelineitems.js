'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvoiceLineItems = sequelize.define('InvoiceLineItems', {
    invoiceID: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    createdDate: DataTypes.DATE
  }, {});
  InvoiceLineItems.associate = function(models) {
    // associations can be defined here
  };
  return InvoiceLineItems;
};