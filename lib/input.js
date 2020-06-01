const minimist = require('minimist');

// a only case
// a and add are the same
// if type is a -> add
const parse = arr => {
  const obj = minimist(arr);
  delete obj._;

  // [['add', 'I am a note']]
  const [[type, payload]] = Object.entries(obj);

  // console.log('???????????????????????', type, payload);
  return {
    type,
    payload
  };
};

const valid = action => {
  // return true if the type is a valid command (add)
  // and the payload isn't empty
  // return false

  return action.type === 'add' && action.payload;
}

module.exports = {
  parse,
  valid
};