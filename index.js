const { parse, valid } = require('./lib/input');
const { execute } = require('./lib/notes');

console.log(parse(process.argv));

valid(parse(process.argv)) ? execute : error

// use parse to create an action from process.argv
// use valid to check if it is a valid action
// -> if valid execute
// -> otherwise show error
