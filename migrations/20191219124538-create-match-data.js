'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatchData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER
      },
      heroId: {
        type: Sequelize.INTEGER
      },
      gameStart: {
        type: Sequelize.DATE
      },
      result: {
        type: Sequelize.BOOLEAN
      },
      kill: {
        type: Sequelize.INTEGER
      },
      death: {
        type: Sequelize.INTEGER
      },
      assist: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date ()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date ()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MatchData');
  }
};