'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        type: Sequelize.STRING(255)
      },
      assetType:{
        type: Sequelize.INTEGER(10),
        references: {
          foreignKey: 'assetType',
          model: 'AssetTypes'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      company: {
        type: Sequelize.STRING(255)
      },
      serialNumber: {
        type: Sequelize.STRING(255)
      },
      modal: {
        type: Sequelize.STRING(255)
      },
      yearOfManufacture: {
        type: Sequelize.STRING(255)
      },
      warrantyExpireDate: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING(255)
      },
      subscriptionType: {
        type: Sequelize.STRING(255)
      },
      tag: {
        type: Sequelize.STRING(255)
      },
      invoiceLineItemID: {
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
    return queryInterface.dropTable('Assets');
  }
};
