const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account');

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/');
  } else {
    next();
  }
};

router.get('/login', accountController.index);
router.post('/login', accountController.index);
router.post('/logout', accountController.logout);
router.get('/reservations', accountController.reservations);

module.exports = router;
