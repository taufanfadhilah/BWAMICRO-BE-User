"use strict";
const bycrpt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Taufan",
          profession: "Admin Micro",
          role: "admin",
          email: "admin@gmail.com",
          password: await bycrpt.hash("secret123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fadhilah",
          profession: "Front End Developer",
          role: "student",
          email: "student@gmail.com",
          password: await bycrpt.hash("secret123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
