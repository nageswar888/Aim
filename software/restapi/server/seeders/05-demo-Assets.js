'use strict';
const assets = require('./assets')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<assets.length; i++){
      insertion.push({
        name : assets[i].name,
        company : assets[i].company,
        assetType: assets[i].assetType,
        serialNumber : assets[i].serialNumber,
        modal : assets[i].modal,
        yearOfManufacture  : assets[i].yearOfManufacture,
        warrantyExpireDate : assets[i].warrantyExpireDate,
        description : assets[i].description,
        subscriptionType : assets[i].subscriptionType,
        tag : assets[i].tag,
        invoiceLineItemID : assets[i].invoiceLineItemID,
        createdDate : assets[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('Assets',insertion , {});

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
