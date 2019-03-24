const config = require('../config');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
const reservationSchema = require('../reservationSchema');
const Reservation = mongoose.model('Reservation', reservationSchema);

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home'
  });
});

router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login',
    success: req.session.success,
    errors: req.session.errors
  });
  req.session.errors = null;
});

router.post('/login', (req, res, next) => {
  req.check('email', 'Invalid email address.').isEmail();
  req.check('password', 'Password is invalid.').isLength({min: 4});

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }

  res.redirect('/login');
});

router.get('/queue', (req, res, next) => {
  res.render('Queue', {
    title: 'Queue'
  });
});

module.exports = router;
