const testConfig = require('../config/test');
const Test = require('../models/test');

exports.index = (req, res) => {
  res.render('test', {
    title: 'Test'
  });
};
