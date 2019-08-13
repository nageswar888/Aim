'use strict';
 const purchaseOrders = require('./purchaseOrders')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<purchaseOrders.length; i++){
      insertion.push({
        vendor : purchaseOrders[i].vendor,
        purchasedOn : purchaseOrders[i].purchasedOn,
        receivedDate : purchaseOrders[i].receivedDate,
        assetRequestID : purchaseOrders[i].assetRequestID,
        status  : purchaseOrders[i].status,
        createdBy : purchaseOrders[i].createdBy,
        description : purchaseOrders[i].description,
        createdDate : purchaseOrders[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('PurchaseOrders',insertion , {});

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
