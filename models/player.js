'use strict';
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Player extends Model {}

  Player.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        const salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash
      }
    }
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