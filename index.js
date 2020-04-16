// index.js

/**
 * Required External Modules
 */

const connection = require('./db-connect.js');
const express = require("express");
const path = require("path");
const schema = require('./schema');
// const yahoo = require('./yahoo');
console.log(connection);



// connection.doSomething();
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  // Promise.all(yahoo.quotes).then((quote)=>{
  //   console.log(quote);
  // })
    res.render("index", { title: "Home" });
  });

app.get("/test", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });

  app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
  });
  
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });