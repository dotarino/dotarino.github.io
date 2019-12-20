const express = require('express')
const router = express.Router()

//controller
const HeroController = ('../controllers/heroController')
const PlayerController = require('../controllers/playerController')

// router.get('/', HeroController.findAll);
router.get('/', (req, res) => {
  let kosong = {"ini kosong"}
  res.render('heroes', kosong)
})


module.exports = router