'use strict';
const fs = require('fs');
const data = fs.readFileSync('./heroesData/intelligenceHeroes.json')
const intHeroes = JSON.parse(data)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Heroes', intHeroes, {});
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
    return queryInterface.bulkDelete('Heroes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
