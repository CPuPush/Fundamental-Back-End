const moment = require('moment');
// lodash
const _ = require('lodash');

const date = moment().format('MMM Do YY');
console.log(date);

const myOddEventArray = _.partition([1,2,3,4,5,6], (n)=>n % 2);
console.log(myOddEventArray);