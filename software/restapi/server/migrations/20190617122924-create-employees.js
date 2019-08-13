'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(128)
      },
      salt:{
        type: Sequelize.STRING(16)
      },
      name: {
        type: Sequelize.STRING(50)
      },
      surname: {
        type: Sequelize.STRING(50)
      },
      phonenumber: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(1000)
      },
      role: {
        type: Sequelize.STRING(50)
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
    return queryInterface.dropTable('Employees');
  }
};
