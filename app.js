const express = require('express')
const app = express()
const PORT = 3000

//Router
const routes = require('./routes')
const players = require('./routes/playerRouter')
const heroes = require('./routes/heroRouter')

//view engine
app.use(express.urlencoded({
  express : true
}))
app.set('view engine', 'ejs')

//routing
app.use('/', routes)
app.use('/players', players)
app.use('/heroes', heroes)

app.listen(PORT, () => {
  console.log("Running on port " + PORT)
})