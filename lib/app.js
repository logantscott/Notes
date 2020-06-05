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
    
app.get('/note/:id', (req, res) => {
  console.log('REQ', req.params.id);
  Note
    .findById(req.params.id)
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
