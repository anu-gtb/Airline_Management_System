'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
         airplaneId:1,
         row:1,
         col:'A',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         airplaneId:1,
         row:1,
         col:'B',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         airplaneId:2,
         row:1,
         col:'C',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         airplaneId:3,
         row:2,
         col:'D',
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
         airplaneId:4,
         row:2,
         col:'E',
         createdAt:new Date(),
         updatedAt:new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
