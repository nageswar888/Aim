'use strict';
 const assetRequests = require('./assetRequests')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let insertion = []

    for(let i=0; i<assetRequests.length; i++){

      insertion.push({
        assetType : assetRequests[i].assetType,
        resourceID : assetRequests[i].resourceID,
        projectID : assetRequests[i].projectID,
        dueDate : assetRequests[i].dueDate,
        status  : assetRequests[i].status,
        createdBy : assetRequests[i].createdBy,
        reason : assetRequests[i].reason,
        description : assetRequests[i].description,
        createdDate : assetRequests[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('AssetRequests',insertion , {});

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
