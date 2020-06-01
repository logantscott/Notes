const add = action => {
  const note = {
    text: action.payload
  };

  console.log(note);
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