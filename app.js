'use strict'
const express = require('express')
const app = express()
const PORT = 3000

// const bodyParser = require('body-parser')

//Router
const routes = require('./routes')
const players = require('./routes/playerRouter')
const heroes = require('./routes/heroRouter')
const session = require('express-session')

//view engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended : false
}))

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

//routing
app.use('/', routes)
app.use('/player', players)
app.use('/heroes', heroes)


app.listen(PORT, () => {
  console.log("Running on port " + PORT)
})