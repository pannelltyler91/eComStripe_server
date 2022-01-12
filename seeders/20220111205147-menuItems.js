'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menuItems', [{
      priceInCents: 250,
      name: 'Takoyaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      priceInCents: 400,
      name: 'Okonomiyaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 130,
      name: 'Yakitori',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 1000,
      name: 'Yakisoba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 400,
      name: 'Tteokbokki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 350,
      name: 'Hotteok',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 350,
      name: 'Bungeoppang',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 100,
      name: 'Odeng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 400,
      name: 'Baozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 1150,
      name: 'Jiaozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 1500,
      name: 'Sichuan mala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      priceInCents: 800,
      name: 'xiaolongbao',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menuItems', null, {});
  }
};
