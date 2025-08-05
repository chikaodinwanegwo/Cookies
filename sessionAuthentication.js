// Look up user in database, if found, confirm password:
if (password == "codec@demy10") {
  // Attach an `authenticated` property to our session:
  req.session.authenticated = true;
  // Attach a user object to our session:
  req.session.user= {
    username,
    password,
  }
}

see example in flowers.js
