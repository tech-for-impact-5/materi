"use strict";



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "username", {
      type: Sequelize.STRING,
      after: "email",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "username")
  },
};
