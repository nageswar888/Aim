'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    invoiceDate: DataTypes.DATE,
    receivedDate: DataTypes.DATE,
    totalAmount: DataTypes.INTEGER,
    createdDate: DataTypes.DATE
  }, {});
  Invoices.associate = function(models) {
    // associations can be defined here
    Invoices.belongsTo(models.InvoiceLineItems,{foreignKey: 'invoiceID', targetKey: 'id'});

  };
  return Invoices;
};
