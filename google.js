var util = require('util');
var watchlist = require('./data/watchlist.json')

require('colors');

var _ = require('lodash');
var googleFinance = require('google-finance');

// var SYMBOL = 'NASDAQ:AAPL';

// var SYMBOL = 'NASDAQ:AAPL';
var FROM = '2014-01-01';
var TO = '2014-12-31';

watchlist.forEach(symbol => {
    getGoogleQuote(symbol.stock);
});

function getGoogleQuote(symbol){
console.log(symbol)
    googleFinance.historical({
        symbol: symbol,
        from: FROM,
        to: TO
      }, function (err, quotes) {

        console.log(quotes)
        if (err) { throw err; }
        // console.log(util.format(
        //   '=== %s (%d) ===',
        //   symbol,
        //   quotes.length
        // ).cyan);
        if (quotes[0]) {
        //   console.log(
        //     '%s\n...\n%s',
        //     JSON.stringify(quotes[0], null, 2),
        //     JSON.stringify(quotes[quotes.length - 1], null, 2)
        //   );
        } else {
        //   console.log('N/A');
        }
      });

};