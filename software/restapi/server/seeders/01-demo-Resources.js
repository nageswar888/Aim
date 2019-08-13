'use strict';
const resources = require('./resources')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let insertion = [];

    for(let i=0; i<resources.length; i++){
      insertion.push({
        firstname : resources[i].firstname,
        lastname : resources[i].lastname,
        email : resources[i].email,
        empID : resources[i].empID,
        joiningDate  : resources[i].joiningDate,
        supervisor : resources[i].supervisor,
        address : resources[i].address,
        phonenumber : resources[i].phonenumber,
        laborCategory : resources[i].laborCategory,
        createdAt:new Date(),
        updatedAt: new Date()

      })
    }
    return queryInterface.bulkInsert('Resources',insertion , {});

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
