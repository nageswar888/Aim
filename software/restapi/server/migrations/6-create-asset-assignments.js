'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AssetAssignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      assetID: {
        type: Sequelize.INTEGER(10),
        references: {
          foreignKey: 'assetID',
          model: 'Assets'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      resourceID: {
        type: Sequelize.INTEGER(10),
        references: {
          foreignKey: 'resourceID',
          model: 'Resources'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      projectID: {
        type: Sequelize.INTEGER(10),
        references: {
          foreignKey: 'projectID',
          model: 'Projects'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      billable: {
        type: Sequelize.BOOLEAN
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('AssetAssignments');
  }
};
