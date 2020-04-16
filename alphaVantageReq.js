var request = require('request');
var apiKey = require('./alphaVantageAPIKEY.json');
var rp = ('request-promise');
var list = require('watchList.json');
var baseUrl = 'https://www.alphavantage.co';
var urlQF = 'query?function=';
var urlQS = '&symbol=';
var urlQK = '&apikey=';