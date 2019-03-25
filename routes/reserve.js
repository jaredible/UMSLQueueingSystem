const routeConfig = require('../configurations/routes');
const mongoConfig = require('../configurations/mongodb');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// TODO: authentication
mongoose.connect(mongoConfig.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
const reservationSchema = require('../reservationSchema');
const Reservation = mongoose.model('Reservation', reservationSchema);

const aws = require('aws-sdk');

// Require controller modules.
const reserveContoller = require('../controllers/reserveController');

/// RESERVE ROUTES ///

// INFO: Index page has customizeable data. Home and 2D selection pages have same layout but different data.

router.all('/:type', reserveContoller.index);

module.exports = router;
