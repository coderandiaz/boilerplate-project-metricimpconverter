const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Convert a valid input such as 10L: GET request to /api/convert', function () {
  test('/api/convert?input=10L', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=10L')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, '2.64172176857989 gal', 'Response should be "2.64172176857989 gal"');
        done();
      });
  });
});

suite('Convert an invalid input such as 32g: GET request to /api/convert', function () {
  test('/api/convert?input=32g', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=32g')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'invalid unit', 'Response should be invalid unit');
        done();
      });
  });
});

suite('Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert', function () {
  test('/api/convert?input=3/7.2/4kg', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4 kg')
      .end(function (err, res) {
        assert.equal(res.text, "invalid number", 'Response should be invalid');
        done();
      });
  });
});

suite('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert', function () {
  test('/api/convert?input=3/7.2/4kilomegagram', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res) {
        assert.equal(res.text, "invalid number and unit", 'Response should be invalid');
        done();
      });
  });
});

suite('Convert with no number such as kg: GET request to /api/convert', function () {
  test('/api/convert?input=kg', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert?input=kg')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, '2.2046244201837775 lbs', 'Response should be "2.2lbs"');
        done();
      });
  });
});