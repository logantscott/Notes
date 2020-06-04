const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// adding static method
notesSchema.statics.execute = function(action) {
  if(action.type === 'add') {
    // create a note
    // const bedrooms = Math.ceil(Math.random() * 3);
    const text = action.payload;

    // INSERT INTO notes ....;
    return this.create({
      text
    });
  } else if(action.type === 'list') {
    // SELECT * FROM notes;
    return this.find();
  }
};

module.exports = mongoose.model('Notes', notesSchema);
