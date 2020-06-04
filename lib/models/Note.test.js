const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  // connect to database before all
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  // clear all data before each test
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  // disconnect from database after all
  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

  // test add
  it('can create a note with execute', () => {
    const actionAdd = { type: 'add', payload: 'My Note' }

    return Note.execute(actionAdd)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        });
      });
  });

  // test list
  it('can list all notes', async() => {
    const actionAdd = { type: 'add', payload: 'My Note' }
    await Note.execute(actionAdd);
    const actionList = { type: 'list' }

    return Note.execute(actionList)
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });

  it('can delete a note', async() => {
    const actionAdd = { type: 'add', payload: 'My Note' }
    const addedNote = await Note.execute(actionAdd);
    const actionDelete = { type: 'delete', payload: addedNote._id }

    return Note.execute(actionDelete)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: addedNote._id,
          text: expect.any(String),
          __v: 0
        });
      });
  });
});
