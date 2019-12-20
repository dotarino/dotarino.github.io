const express = require('express')
const session = require('express-session')
const router = express.Router()

//calling controller
const Player = require('../controllers/playerController')

router.get('/', (req, res) => {
  let success = req.query.success || false
  let err = req.query.err || false
  let msg = req.query.msg || null
  res.render('index', { success, msg, err })
});

router.post('/', Player.signin)

module.exports = router