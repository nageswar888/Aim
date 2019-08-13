'use strict';
 const invioces = require('./invioces')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = []

    for(let i=0; i<invioces.length; i++){
      insertion.push({
        invoiceDate : invioces[i].invoiceDate,
        receivedDate : invioces[i].receivedDate,
        totalAmount : invioces[i].totalAmount,
        createdDate : invioces[i].createdDate,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }

    return queryInterface.bulkInsert('Invoices',insertion , {});

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
