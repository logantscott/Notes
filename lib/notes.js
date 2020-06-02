const add = action => {
  const note = {
    id: Date.now(),
    text: action.payload
  };

  return note;
};



// --------------

const execute = action => {
  // series of ifs
  // switch
  // dictionary of functions
}

module.exports = {
  execute,
  add
}