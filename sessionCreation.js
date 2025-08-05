//creating a session

const express = require("express");
const app = express();
const session = require("express-session");

const PORT = process.env.PORT || 4001;

// Create your session middleware below:
app.use(
  session({
    secret: "helllo27357",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
