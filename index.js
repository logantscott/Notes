const { parse } = require('./lib/input');

console.log(parse(process.argv));

// use parse to create an action from process.argv
// use valid to check if it is a valid action
// -> if valid execute
// -> otherwise show error
