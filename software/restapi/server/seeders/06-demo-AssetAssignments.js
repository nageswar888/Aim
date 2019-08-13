'use strict';
const assetAssignments =require('./assetAssignments');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<assetAssignments.length; i++){
      insertion.push({
        assetID : assetAssignments[i].assetID,
        resourceID : assetAssignments[i].resourceID,
        projectID : assetAssignments[i].projectID,
        billable : assetAssignments[i].billable,
        startDate  : assetAssignments[i].startDate,
        endDate : assetAssignments[i].endDate,
        status : assetAssignments[i].status,
        active : assetAssignments[i].active,
        createdDate : assetAssignments[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('AssetAssignments',insertion , {});

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
