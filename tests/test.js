const supertest = require('supertest');
const app = require('../app');
const request = supertest(app)


request
  .get('/loopImgs')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
  	console.log(1111);
  	console.log(res.body);
    if (err) throw err;
  });








