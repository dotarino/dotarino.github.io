function checkRetypePwd(req, res, next) {
  let err = false;
  if (req.body.inputPassword != req.body.retypePassword) {
    err = true
    let msg = `Plese retype your password correctly!`
    res.redirect(`/player/register?err=${err}&&msg=${msg}`)
  } else next();
}

module.exports = checkRetypePwd