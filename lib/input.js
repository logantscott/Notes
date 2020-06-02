const minimist = require('minimist');

const parse = arr => {
  const obj = minimist(arr);
  delete obj._;

  // [['add', 'I am a note']]
  let [[type, payload]] = Object.entries(obj);

  // if type is a -> add
  if(type === 'a') type = 'add';

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