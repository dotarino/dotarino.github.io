'use strict'

const session = require('express-session')

function checkSession(req, res, next) {
  let err = false;
  if (!req.session.login) {
    err = true
    let msg = `Plese login first to access this page!`
    res.redirect(`/?err=${err}&&msg=${msg}`)
  } else next();
}

module.exports = checkSession