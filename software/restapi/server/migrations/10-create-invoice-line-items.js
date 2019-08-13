'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('InvoiceLineItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      invoiceID: {
        type: Sequelize.INTEGER(10),
        references: {
          foreignKey: 'invoiceID',
          model: 'Invoices'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      amount: {
        type: Sequelize.INTEGER(10)
      },
      createdDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('InvoiceLineItems');
  }
};
