const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Test Suite', function(){
    test('getNum for gallon', function (done) {
        let testInput = "4gal";
        let testOutput = "4";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getNum for kilogram', function (done) {
        let testInput = "4.3kg";
        let testOutput = "4.3";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getNum for kilometer', function (done) {
        let testInput = "1/2km";
        let testOutput = "1/2";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getNum for pounds', function (done) {
        let testInput = "5.4/3lbs";
        let testOutput = "5.4/3";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });

    // Get unit function
    test('getUnit for gallon', function (done) {
        let testInput = "4gal";
        let testOutput = "gal";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getUnit for kilogram', function (done) {
        let testInput = "4.3kg";
        let testOutput = "kg";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getUnit for kilometer', function (done) {
        let testInput = "1/2km";
        let testOutput = "km";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('getUnit for pounds', function (done) {
        let testInput = "5.4/3lbs";
        let testOutput = "lbs";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
});
