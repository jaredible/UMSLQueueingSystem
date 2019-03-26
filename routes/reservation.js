const routeConfig = require('../configurations/routes');
const express = require('express');
const router = express.Router();

// Require controller modules.
const reserveContoller = require('../controllers/reservationController');
const confirmationController = require('../controllers/confirmationController');

/// RESERVE ROUTES ///

// INFO: Index page has customizeable data. Home and 2D selection pages have same layout but different data.

router.all('/:type', reserveContoller.index);
router.all('/:type/confirmation', confirmationController.index);

module.exports = router;
