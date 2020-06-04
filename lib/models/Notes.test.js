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

  // test add
  it('can create a note with execute', () => {
    const action = { type: 'add', payload: 'My Note' }

    return Notes.execute(action)
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
    // { type: 'add', payload: 'My Note' }
    // { type: 'list', payload: true }
    // { type: 'delete', payload: '12345' }
    const action = { type: 'add', payload: 'My Note' }
    const actionList = { type: 'list' }

    await Notes.execute(action);

    return Notes.execute(actionList)
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });
});
