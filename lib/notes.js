const add = action => {
  const note = {
    id: Date.now(),
    text: action.payload
  };

  console.log(`Note added: ${note.text}`);

  return note;
};



// --------------

const execute = action => {
  // series of ifs
  // switch
  // dictionary of functions
  switch(action.type) {
    case 'add':
      // console.log('==================add case');
      return add(action);
    // break;
    default:
      // do this
      // console.log('===============default');
  };
};

module.exports = {
  execute,
  add
};
