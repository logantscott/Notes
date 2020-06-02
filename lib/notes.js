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
      return add(action);
    // break;
    default:
      // do this
  };
};

module.exports = {
  execute,
  add
};
