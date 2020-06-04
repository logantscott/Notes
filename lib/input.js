const minimist = require('minimist');

const parse = arr => {
  // console.log('0) ======This is the fucking input array======', arr)
  const obj = minimist(arr);
  delete obj._;

  // [['add', 'I am a note']]
  // console.log('==================================');
  // console.log('1) ======This is the obj before entries but after minimist======', obj)
  let [[type, payload]] = Object.entries(obj);

  // if type is a -> add
  if(type === 'a') type = 'add';

  // console.log({ type, payload })

  return {
    type,
    payload
  };
};

// const valid = action => {
//   return action.type === 'add' && action.payload;
// }

class Input {
  constructor(arr) {
    const { type, payload } = parse(arr);
    // console.log('2) ======This is the payload in the Input constructor======', payload);
    this.type = type;
    this.payload = payload;
  }

  valid() {
    // console.log('3) ======This is the payload in the valid() method of the Input constructor======', this.payload)
    // typeof blocks true bool coming from minimist, from just using --add and no payload
    return this.type === 'add' && typeof this.payload === 'string';
  }
}

module.exports = {
  Input
};