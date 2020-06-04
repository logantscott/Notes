const { parse, valid, Input } = require('./lib/input');
const { execute, Notes } = require('./lib/notes');

// console.log(parse(process.argv));

// use parse to create an action from process.argv
// use valid to check if it is a valid action
// -> if valid execute
// -> otherwise show error

//const action = parse(process.argv);
const action = new Input(process.argv);
// console.log('action:', action);
// if(action.valid()) execute(action);
if(action.valid()) Notes.execute(action);

else console.log('Invalid command');
