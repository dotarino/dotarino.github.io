'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  
  class MatchData extends Model{}

  MatchData.init({
    playerId: DataTypes.INTEGER,
    heroId: DataTypes.INTEGER,
    gameStart: DataTypes.DATE,
    result: DataTypes.BOOLEAN,
    kill: DataTypes.INTEGER,
    death: DataTypes.INTEGER,
    assist: DataTypes.INTEGER
  }, {sequelize});
  MatchData.associate = function(models) {
    // associations can be defined here
  };
  return MatchData;
};