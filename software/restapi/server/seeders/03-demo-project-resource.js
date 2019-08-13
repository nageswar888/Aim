'use strict';
 const projectResources = require('./project-resource')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<projectResources.length; i++){
      insertion.push({
        projectID : projectResources[i].projectID,
        resourceID : projectResources[i].resourceID,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('project_resources',insertion , {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
