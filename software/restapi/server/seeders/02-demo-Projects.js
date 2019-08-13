'use strict';
 const projects = require('./projects')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<projects.length; i++){
      insertion.push({
        name : projects[i].name,
        vendor : projects[i].vendor,
        startDate : projects[i].startDate,
        createdDate : projects[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('Projects',insertion , {});

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
