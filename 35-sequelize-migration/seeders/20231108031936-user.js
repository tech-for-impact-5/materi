'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Auzan",
        email: "auzan@gmail.com",
        username: "auzan",
        password: "123"
      },
      {
        name: "Alzi",
        email: "alzi@gmail.com",
        username: "alzi",
        password: "456"
      },
      {
        name: "Adit",
        email: "adit@gmail.com",
        username: "adit",
        password: "678"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
