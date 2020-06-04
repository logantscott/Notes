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
  if(type === 'l') type = 'list';
  if(type === 'd') type = 'delete';

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
    switch(this.type) {
      case 'add':
      return this.type === 'add' && typeof this.payload === 'string'
      case 'list':
      return this.type === 'list'
      case 'delete':
      return this.type === 'delete' && typeof this.payload === 'string'
      default:
        return;
    }
  }
}

module.exports = {
  Input
};