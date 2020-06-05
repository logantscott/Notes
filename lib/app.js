const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Note = require('./models/Note');

app.use(express.json());

app.post('/note', (req, res) => {
  Note
    .create(req.body)
    .then(note => {
      res.send(note);
  });
});
    
app.get('/note', (req, res) => {
  Note
    .findById('5ed9975529376a5d1c6dc490')
    .then(note => {
      res.send(note);
  });
});

app.get('/notes', (req, res) => {
  Note
    .find()
    .then(notes => {
      res.send(notes);
  });
});

module.exports = app;
