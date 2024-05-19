const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('convertHandler', function(){
    test('convertHandler should correctly read a whole number input.', function (done) {
        let testInput = "4gal";
        let testOutput = "4";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly read a decimal number input.', function (done) {
        let testInput = "4.3kg";
        let testOutput = "4.3";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly read a fractional input.', function (done) {
        let testInput = "1/2km";
        let testOutput = "1/2";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly read a fractional input with a decimal.', function (done) {
        let testInput = "5.4/3 lbs";
        let testOutput = "5.4/3";
        let output = convertHandler.getNum(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', function (done) {
        let testInput = "3/2/3";
        assert.equal(convertHandler.getUnit(testInput), "invalid unit");
        done();
    });
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function (done) {
        let testInput = "lbs";
        let testOutput = "0.453592 kg";
        let inputNumber = convertHandler.getNum(testInput);
        let inputUnit = convertHandler.getUnit(testInput);
        let output = convertHandler.convert(inputNumber, inputUnit);
        assert.equal(inputNumber, "1");
        assert.equal(output, testOutput);
        done();
    });
    test('convertHandler should correctly read each valid input unit.', function (done) {
        let testInput = "1/2 km";
        let testOutput = "km";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly return an error for an invalid input unit.', function (done) {
        let testInput = "5.4/3 Tomatos";
        let outputError = convertHandler.getUnit(testInput);
        assert.equal(outputError, "invalid unit")
        done();
    });
    test('convertHandler should return the correct return unit for each valid input unit.', function (done) {
        let testInput = "5.4/3 lbs";
        let testOutput = "lbs";
        let output = convertHandler.getUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function (done) {
        let testInput = "pounds";
        let testOutput = "lbs"
        let output = convertHandler.spellOutUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert gal to L.', function (done) {
        let testInput = "gal";
        let testOutput = "L";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert L to gal.', function (done) {
        let testInput = "L";
        let testOutput = "gal";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert mi to km.', function (done) {
        let testInput = "mi";
        let testOutput = "km";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert km to mi.', function (done) {
        let testInput = "km";
        let testOutput = "mi";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert lbs to kg.', function (done) {
        let testInput = "lbs";
        let testOutput = "kg";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
    test('convertHandler should correctly convert kg to lbs.', function (done) {
        let testInput = "kg";
        let testOutput = "lbs";
        let output = convertHandler.getReturnUnit(testInput);
        assert.equal(output, testOutput)
        done();
    });
});
