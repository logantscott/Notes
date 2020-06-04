const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// adding static method
schema.statics.execute = function(action) {
  if(action === 'add') {
    // create a note
    // const bedrooms = Math.ceil(Math.random() * 3);

    // INSERT INTO notes ....;
    return this.create({
      text
    });
  } else if(action === 'list') {
    // SELECT * FROM notes;
    return this.find();
  }
};

module.exports = mongoose.model('Notes', notesSchema);
