'use strict';
  const invoicelineitems = require('./invoiceLineItems')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let insertion = [];
    for(let i=0; i<invoicelineitems.length; i++){
      insertion.push({
        invoiceID : invoicelineitems[i].invoiceID,
        amount : invoicelineitems[i].amount,
        createdDate : invoicelineitems[i].createdDate,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('InvoiceLineItems', insertion,{});

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
      */
      return queryInterface.bulkDelete('InvoiceLineItems', null, {});

  }
};
