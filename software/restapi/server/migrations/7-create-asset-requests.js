'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AssetRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      assetType: {
        allowNull: false,
        type: Sequelize.INTEGER(10),
        references:{
          foreignKey: 'assetType',
          model: 'AssetTypes'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      resourceID: {
        allowNull: false,
        type: Sequelize.INTEGER(10),
        references:{
          foreignKey: 'resourceID',
          model: 'Resources'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      projectID: {
        allowNull: false,
        type: Sequelize.INTEGER(10),
        references:{
          foreignKey: 'projectID',
          model: 'Projects'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      dueDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING(255)
      },
      createdBy: {
        type: Sequelize.INTEGER(10)
      },
      reason: {
        type: Sequelize.STRING(255)
      },
      description: {
        type: Sequelize.STRING(255)
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
    return queryInterface.dropTable('AssetRequests');
  }
};
