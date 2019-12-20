const express = require('express')
const router = express.Router()
const PlayerController = require('../controllers/playerController')
const HeroController = require('../controllers/heroController')
const checkPwd = require('../middleware/checkRetypePwd')
const checkSession = require('../middleware/checkSession')

//to prevent accessing page without login first
router.get('/', checkSession, (req, res) => {
  res.render('player')
})

router.get('/register', (req, res) => {
  let err = req.query.err || false
  let msg = req.query.msg
  res.render('playerRegister', { err, msg })
})

router.post('/register', checkPwd, PlayerController.register)

router.get('/reportMatch', checkSession, HeroController.heroList)


module.exports = router