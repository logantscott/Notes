// const { parse, valid, Input } = require('./lib/input');
// const { execute, Notes } = require('./lib/notes');

// const action = new Input(process.argv);

// if(action.valid()) Notes.execute(action);

// else console.log('Invalid command');

const mongoose = require('mongoose');
const { Input } = require('./lib/input');
const Notes = require('./lib/models/Notes');

mongoose.connect('mongodb://localhost:27017/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const action = new Input(process.argv);
if(action.valid()) Notes.execute(action)
  .then(() => mongoose.connection.close());
else console.log('Invalid command');