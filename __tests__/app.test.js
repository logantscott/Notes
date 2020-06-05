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
        })
      })
  });

  // it('test the read route - find one', () => {
  //   return request(app)
  //   .get('/note')
  //   .send({})
  // });

  // it('test the read route - find all', () => {
  //   return request(app)
  //   .get('/notes')
  //   .send({})
  // });

  // it('test the update route', () => {
  //   return request(app)
  //   .patch('/note')
  //   .send({})
  // });

  // it('test the delete route - delete one', () => {
  //   return request(app)
  //   .delete('/note')
  //   .send({})
  // });
});