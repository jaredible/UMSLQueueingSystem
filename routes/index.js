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

router.all('/login', (req, res, next) => {
  var email = '';
  var errorEmail = '';
  var errorPassword = '';

  if (req.method === 'POST') {
    email = req.body.email;

    req.check('email', 'Invalid email address.').isEmail();
    req.check('password', 'Password is invalid.').isLength({min: 4});

    var errors = req.validationErrors();
    if (errors) {
      if (errors[0].param === 'email') {
        errorEmail = errors[0].msg;
      }
      if (errors[0].param === 'password') {
        errorPassword = errors[0].msg;
      }
    } else {
      res.redirect('/');
      return;
    }
  }

  res.render('login', {
    title: 'Login',
    email: email,
    errorEmail: errorEmail,
    errorPassword: errorPassword
  });
});

router.post('/login', (req, res, next) => {
  console.log(req.method);
  req.check('email', 'Invalid email address.').isEmail();
  req.check('password', 'Password is invalid.').isLength({min: 4});

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
    res.redirect('/');
  }

  res.render('login', {
    title: 'Login',
    success: req.session.success,
    errors: req.session.errors
  });
  req.session.errors = null;
});

router.get('/queue', (req, res, next) => {
  res.render('Queue', {
    title: 'Queue'
  });
});

module.exports = router;
