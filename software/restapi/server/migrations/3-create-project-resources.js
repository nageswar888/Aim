'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project_resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      projectID: {
        type: Sequelize.INTEGER(10),
        references: {
          model: 'Projects',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      resourceID: {
        type: Sequelize.INTEGER(10),
        references: {
          model: 'Resources',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('project_resources');
  }
};
