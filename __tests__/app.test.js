const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../lib/app.js');

const mongodb = new MongoMemoryServer();

describe('app routes', () => {
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

  it('test the create route - create one', () => {
    return request(app)
      .post('/note')
      .send({
        text: 'My first note'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          text: 'My first note',
          __v: 0
        });
      });
  });

  it('test the read route - find one', async() => {
    const testNote = await request(app)
      .post('/note')
      .send({
        text: 'My first note'
      });


    return request(app)
    .get(`/note/${testNote.body._id}`)
    .send()
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.anything(),
        text: 'My first note',
        __v: 0
      });
    });
  });

  it('test the read route - find all', async() => {
    await request(app)
      .post('/note')
      .send({
        text: 'My first note'
      });


    return request(app)
    .get('/notes')
    .send()
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.anything(),
          text: 'My first note',
          __v: 0
        }]);
      });
  });

  it('test the update route', async() => {
    const testNote = await request(app)
      .post('/note')
      .send({
        text: 'My first note'
      });

    return request(app)
    .patch(`/note/${testNote.body._id}`)
    .send({ text: 'My udpated note lol' })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.anything(),
        text: 'My udpated note lol',
        __v: 0
      });
    });
  });

  it('test the delete route - delete one', async () => {
    const testNote = await request(app)
    .post('/note')
    .send({
      text: 'My note getting deleted'
    });

    return request(app)
    .delete(`/note/${testNote.body._id}`)
    .send()
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.anything(),
        text: 'My note getting deleted',
        __v: 0
      });
    });
  });
});