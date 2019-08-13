'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      firstname: {
        type: Sequelize.STRING(255)
      },
      lastname: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      empID: {
        type: Sequelize.STRING(255)
      },
      joiningDate: {
        type: Sequelize.DATE
      },
      supervisor: {
        type: Sequelize.INTEGER(10)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      phonenumber: {
        type: Sequelize.STRING(255)
      },
      laborCategory: {
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
    return queryInterface.dropTable('Resources');
  }
};
