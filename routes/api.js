'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    let input = req.query.input;

    let number = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
    if (number == "invalid number" && unit == "invalid unit") {
      res.send("invalid number and unit");
    } else if (number == "invalid number") {
      res.send("invalid number");
    } else if (unit == "invalid unit") {
      res.send("invalid unit");
    } else {
      let result = convertHandler.convert(number, unit);
      res.send(`${number} ${unit} converts to ${result}`)
      // res.send(result);
    }
  });

  app.get('/api/convert', (req, res) => {
    res.send('Response for GET request');
  });
};
