'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Player extends Model {}

  Player.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });
  Player.associate = function(models) {
    // associations can be defined here
    Player.belongsToMany(models.Hero, {
      through: models.MatchData,
      foreignKey: 'playerId'
    })
  };
  return Player;
};