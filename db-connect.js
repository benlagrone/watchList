// const mongo = require('mongodb');
var mongoose = require('mongoose');
var dbName = '/watchlistDB';
var mongoDB = "mongodb://localhost:27017";

mongoose.connect(mongoDB+dbName, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongo connection error:'));

db.once('open', function(){
    console.log('open')
})

var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({name: 'Silence'});
console.log(silence.name);

