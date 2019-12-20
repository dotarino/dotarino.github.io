
const Model  = require('../models')
const Player = Model.Player
const Hero = Model.Hero
const session = require('express-session')

class HeroController {
  // static heroList(req, res) {
  //   Hero.findAll()
  //   .then(heroes => {
  //     const user = req.session.login
  //     res.render('reportMatch', {heroes, user})
  //   })
  //   .catch(err => {
  //     res.send(err)
  //   })
  // }

  static findAll(req, res) {
    Hero.findAll()
    .then(heroes => {
      res.render('heroList', {heroes})
    })
    .catch(err => {
        res.send(err)
    })
  }
}

module.exports = HeroController