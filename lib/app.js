const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Note = require('./models/Note');

// const { Input } = require('./lib/input');
// const Note = require('./lib/models/Note');

// mongoose.connect('mongodb://localhost:27017/notes', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use(express.json());

app.post('/note', (req, res) => {
  Note
    .create(req.body)
    .then(note => {
      res.send(note);
  });
});
    


module.exports = app;
