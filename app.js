// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
var mongoose = require('mongoose');
var Promise = require('bluebird');
var config = require('./config');
mongoose.Promise = Promise;

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
if (!config.mongoUrl) {
    // throw new Error('MONGO_URL env variable not set.');
  }
//   var isConn;
//   // initialize MongoDB connection
//   if (mongoose.connections.length === 0) {
    // mongoose.connect(config.mongoUrl);
//   } else {
//     mongoose.connections.forEach(function(conn) {
//       if (!conn.host) {
//         isConn = false;
//       }
//     })
  
//     if (isConn === false) {
//       mongoose.connect(config.mongoUrl);
//     }
//   }
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

  module.exports = app;