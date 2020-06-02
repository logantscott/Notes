const { parse, valid } = require('./lib/input');
const { execute } = require('./lib/notes');

// console.log(parse(process.argv));

// use parse to create an action from process.argv
// use valid to check if it is a valid action
// -> if valid execute
// -> otherwise show error

const action = parse(process.argv);
const isValid = valid(action);

if(isValid) execute(action);
else console.log('Invalid command');
