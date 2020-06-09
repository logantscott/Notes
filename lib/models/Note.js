const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// adding static method
noteSchema.statics.execute = function(action) {
  if(action.type === 'add') {
    // INSERT INTO notes ....;
    return this.create({
      text: action.payload
    })
    .then(note => {
      console.log(`Note added: ${note}`);
      return note;
    });
  } else if(action.type === 'list') {
    // SELECT * FROM notes;
    return this.find()
    .then(notes => {
      console.log(notes);
      return notes;
    });
  } else if(action.type === 'delete') {
    // DELETE FROM notes ....;
    return this.findByIdAndDelete(action.payload)
    .then(note => {
      console.log(`Note deleted: ${note}`);
      return note;
    });
  }
};

module.exports = mongoose.model('Note', noteSchema);
