// In this exercise, we’ll tell the client browser to create a cookie that stores the session ID. We will also modify cookie attributes to add a bit of security. 
//We can add a cookie property in our session middleware like so

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 1000 * 60 *60 * 24, secure: true, sameSite: "none" },
    saveUninitialized: false,
    resave: false,
  })
);


//example
const express = require("express");
const app = express();
const session = require("express-session");
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
const store = new session.MemoryStore();

app.use(
  session({
    secret: "D53gxl41G",
    // Add the cookie property below:
    cookie: { maxAge: 172800000, secure: true, sameSite: "none" }
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
