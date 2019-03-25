const config = require('../config');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// TODO: authentication
mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
const reservationSchema = require('../reservationSchema');
const Reservation = mongoose.model('Reservation', reservationSchema);

// INFO: Index page has customizeable data. Home and 2D selection pages have same layout but different data.

router.get('/', (req, res, next) => {
  res.render('selection', {
    title: 'Home',
    selections: [{
        key: '2d',
        value: '2D'
      },
      {
        key: '3d',
        value: '3D'
      },
      {
        key: 'photolab',
        value: 'Photo Lab'
      }
    ]
  });
});

// TODO: API
router.all('/login', (req, res, next) => {
  var email = '';
  var errorEmail = '';
  var errorPassword = '';

  if (req.method === 'POST') {
    email = req.body.email;

    req.check('email', 'Invalid email address.').isEmail();
    req.check('password', 'Password is invalid.').isLength({
      min: 4
    });

    var errors = req.validationErrors();
    if (errors) {
      for (let i = 0; i < errors.length; i++) {
        let error = errors[i];

        if (error.param === 'email') {
          errorEmail = error.msg;
        }
        if (error.param === 'password') {
          errorPassword = error.msg;
        }
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

// TODO: ensure type exists and use specific types
router.all('/reserve/:type', (req, res, next) => {
  var params = req.params;
  if (params.type !== '') {
    var type = params.type.toLowerCase();

    if (req.method === 'POST') {
      res.redirect('/');
    } else {
      switch (type) {
        case '2d':
          res.render('selection', {
            title: '2D Print Type Selection',
            selections: [{
                key: 'inkjet',
                value: 'Inkjet'
              },
              {
                key: 'laser',
                value: 'Laser'
              },
              {
                key: 'large',
                value: 'Large'
              }
            ]
          });
          break;
        case '3d':
        case 'photolab':
        case 'inkjet':
        case 'laser':
        case 'large':
          res.render('reserve', {
            title: 'Reserve',
            type: req.params.type
          });
          break;
        default:
          res.redirect('/');
          break;
      }
    }
  } else {
    res.redirect('/');
  }
});

module.exports = router;
