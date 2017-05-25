var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1495734470;

var currentMoment = moment.unix(timestamp);
console.log('CurrentMoment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
