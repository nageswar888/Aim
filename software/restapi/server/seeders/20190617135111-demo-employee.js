"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
     */
    return queryInterface.bulkInsert(
      "Employees",
      [
        {
          email: "admin@gmail.com",
          password: "adminadmin",
          name: "jhon",
          surname: "Doe",
          phonenumber: "+10010253161",
          address: "california",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "nag@gmail.com",
          password: "nageswar",
          name: "nag",
          surname: "nag",
          phonenumber: "+91-123456910",
          address: "helinovis",
          role: "super admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "hemanthnidamanuri@gmail.com",
          password: "adminadmin",
          name: "hemanth",
          surname: "nidamanuri",
          phonenumber: "+909603799767",
          address: "ongole",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "nidamanurihemanth@outlook.com",
          password: "cec07e35179b231eaf44010d2c4ae4bd",
          name: "nidamanuri",
          surname: "hemanth",
          phonenumber: "+919182119083",
          address: "hyderabad",
          role: "manager",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "arundhathi@gmail.com",
          password: "4703115e2f811decad1fa777b4c72bc8",
          name: "arundhati",
          surname: "jejjama",
          phonenumber: "+905055505320",
          address: "gadwal",
          role: "super admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "pasupathi@aghora.com",
          password: "7ba9c08c45b87266ce86a32ee1312ac4",
          name: "pasupathi",
          surname: "aghora",
          phonenumber: "+90562358910",
          address: "gadwal",
          role: "super admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "paulallen@outlook.com",
          password: "3f86c102bcb28e2496df5809e26d5c96",
          name: "paul",
          surname: "allen",
          phonenumber: "+1.123456970",
          address: "washington",
          role: "manager",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "marktaiwan@hotmail.com",
          password: "1512ddf7164aac31d041010952c8fc84",
          name: "mark",
          surname: "taiwan",
          phonenumber: "+9412586015",
          address: "taiwan",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "chinchow@gmail.com",
          password: "33e91d1617117e7a8c71d1baf3964d97",
          name: "chin",
          surname: "chow",
          phonenumber: "98745612390",
          address: "china",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "raviteja@gmail.com",
          password: "f9ece96db3ca728d168c77dff2b73c54",
          name: "ravi",
          surname: "teja",
          phonenumber: "95612348110",
          address: "Bangalore",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "apputall@gmail.com",
          password: "44876080b5674b7d09d8ce746df18675",
          name: "appu",
          surname: "talla",
          phonenumber: "+9012345678970",
          address: "Hyderabad",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "naveentalla@gmail.com",
          password: "8bc49e077da826a0fb7ad36118f75895",
          name: "naveen",
          surname: "talla",
          phonenumber: "74125896320",
          address: "Chennai",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "hemanthnidamanuri89@gmail.com",
          password: "1efa74790505777b3ab2cf6cd3664007",
          name: "hemanth",
          surname: "nidamanuri",
          phonenumber: "9603799767",
          address: "Hyderabad",
          role: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "testertest@gmail.com",
          password: "ee5cd67ae3565d9cc5ef60f695402720",
          name: "tester",
          surname: "test",
          phonenumber: "+9112378965480",
          address: "telaviv-yafo ",
          role: "manager  ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "sampletester@gmail.com",
          password: "3173d45eeca92985f65025bd19f925c2",
          name: "sample",
          surname: "tester",
          phonenumber: "789852369710",
          address: "testerslab",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "ananddogiparthi@gmail.com",
          password: "b0ac287b18637bc019124d547f1af2a3",
          name: "anand",
          surname: "dogiparthi",
          phonenumber: "+9178965412320",
          address: "sattenapalli",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "saihemanthkumar@gmail.com",
          password: "44876080b5674b7d09d8ce746df18675",
          name: "saihemanthkumar",
          surname: "telidu",
          phonenumber: "74125896320",
          address: "chilkaluripeta",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "charvith@gmail.com",
          password: "1512ddf7164aac31d041010952c8fc84",
          name: "charvith",
          surname: "cherry",
          phonenumber: "75395185230",
          address: "rajamundry",
          role: "manager",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "gopikrishnaallachowdary@gmail.com",
          password: "4703115e2f811decad1fa777b4c72bc8",
          name: "gopikrishnachowdary",
          surname: "alla",
          phonenumber: "78799542520",
          address: "khammam",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "pradeepbublee@gmail.com",
          password: "7ba9c08c45b87266ce86a32ee1312ac4",
          name: "pradeep",
          surname: "bublee",
          phonenumber: "78542125620",
          address: "khammam",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface,  Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
     */
    return queryInterface.bulkDelete("Employees", null, {});
  }
};
