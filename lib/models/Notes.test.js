const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Notes = require('./Notes');

const mongodb = new MongoMemoryServer();

describe('Notes model', () => {
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

  it('can create a note with execute', () => {
    return Notes.execute('add')
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        });
      });
  });

  it('can list all notes', async() => {
    // { type: 'add', payload: 'My Note' }
    // { type: 'list', payload: true }
    // { type: 'delete', payload: '12345' }
    await Notes.execute('add');

    return Notes.execute('list')
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });
});
