'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    let input = req.query.input;

    let number = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
    let result = convertHandler.convert(number, unit);
    
    res.send(result);
  });

  app.get('/api/convert', (req, res) => {
    res.send('Response for GET request');
  });
};
