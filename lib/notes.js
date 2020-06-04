// ADD
// const add = action => {
//   const note = {
//     id: Date.now(),
//     text: action.payload
//   };

//   console.log(`Note added: ${note.text}`);

//   return note;
// };

// // EXECUTE
// const execute = action => {

//   switch(action.type) {
//     case 'add':
//       return add(action);
//     // break;
//     default:
//       // do this
//   };
// };

// CLASS REWRITE
class Notes {
  constructor(payload) {
    this.id = Date.now(),
    this.text = payload
  }
  
  static execute(action) {
    switch(action.type) {
      case 'add':
        return this.add(action);
      // break;
      default:
        // do this
        return;
    };
  }

  static add(action) {
    const note = new Notes(action.payload);
    console.log(`Note added: ${note.text}`);
  }
};

module.exports = {
  Notes
};
