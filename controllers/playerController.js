const bcrypt = require('bcryptjs');
const session = require('express-session')
const Model  = require('../models')
const Player = Model.Player
const { Hero } = require('../models') 
const { MatchData } = require('../models') 


class PlayerController {
  static register(req, res) {
    const newUser = {
      username: req.body.registerUsername,
      password: req.body.inputPassword
    }

    //input to db
    Player.create(newUser) 
      .then(user => {
        let success = true
        let msg = "Register account successful! Please sign in"
        res.redirect(`/?success=${success}&&msg=${msg}`)
      })
      .catch(err => {
        let msg = "Error registering to database!"
        res.redirect(`/player/register?err=${err}&&msg=${msg}`)
      })
  }

  static signin(req, res) {
    Player.findOne({
      where: {
        username : req.body.username
      },
      order: ['id']
    })
      .then(user => {
        // console.log(user);
        if (!user) {
          let err = true
          let msg = "Wrong username"
          res.redirect(`/?err=${err}&&msg=${msg}`)
        } else
        if(!bcrypt.compareSync(req.body.password, user.password)) {
          let err = true
          let msg = "Wrong password"
          res.redirect(`/?err=${err}&&msg=${msg}`)
        } else {
          req.session.login = user
          // res.send(req.session.login)
          // res.send(user)
          // res.redirect(`/player?id=${req.session.login.id}`)
          res.render('player', {user})
        }
      })
      .catch(err => {
        let msg = "Error accessing dataabase"
        res.redirect(`/?err=${err}&&msg=${msg}`)
        // res.send(err, "ini error")
      })
  }

  static reportMatch(req,res) {
    
  }
}

module.exports = PlayerController