var yahooFinance = require('yahoo-finance');
var watchlist = require('./data/watchlist.json')

getYahooQuote(watchlist[1].stock)

watchlist.forEach(element => {
  // console.log(element.stock)
  // getHistory(element.stock)
  // getYahooQuote(element.stock)
});



function getHistory(symbol){
  yahooFinance.historical({
    symbol: symbol,
    from: '2012-01-01',
    to: '2012-12-31',
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, function (err, quotes) {
      console.log('quotes', quotes)
    //...
  });
}

function getYahooQuote(symbol){
// This replaces the deprecated snapshot() API
yahooFinance.quote({
  symbol: symbol,
  modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
}, function (err, quotes) {
    console.log('quotes', quotes)
  // ...
});
}


// yahooFinance.historical({
//   symbol: 'AAPL',
//   from: '2012-01-01',
//   to: '2012-12-31',
//   // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
// }, function (err, quotes) {
//     // console.log('quotes', quotes)
//   //...
// });
 
// // This replaces the deprecated snapshot() API
// yahooFinance.quote({
//   symbol: 'AAPL',
//   modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
// }, function (err, quotes) {
//     // console.log('quotes', watchlist)
//   // ...
// });