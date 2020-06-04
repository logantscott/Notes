const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// adding static method
schema.statics.execute = function(action) {

};

module.exports = mongoose.model('Notes', schema);
