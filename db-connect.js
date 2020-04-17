// const mongo = require('mongodb');
var mongoose = require('mongoose');
var dbName = '/watchlistDB';
var mongoDB = "mongodb://localhost:27017";

mongoose.connect(mongoDB+dbName, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongo connection error:'));

