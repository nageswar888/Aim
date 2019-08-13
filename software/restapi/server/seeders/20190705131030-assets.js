"use strict";
const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

     */
    let dt = JSON.parse(
      fs.readFileSync(
        "/home/hemanth//WebstormProjects/AIM/software/restapi/server/seeders/assets.json"
      )
    );
    for (let i = 0; i < dt.length; i++) {
      dt[i]["warrantyExpireDate"] = new Date();
      dt[i]["createdDate"] = new Date();
      dt[i]["createdAt"] = new Date();
      dt[i]["updatedAt"] = new Date();
    }
      return queryInterface.bulkInsert('Assets', dt , {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

     */
      return queryInterface.bulkDelete('Assets', null, {});

  }
};
