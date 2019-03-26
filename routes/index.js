const routeConfig = require('../configurations/routes');
const express = require('express');
const router = express.Router();

// Require controller modules.
const optionsController = require('../controllers/optionsController');

/// OPTIONS ROUTES ///

router.get('/', optionsController.printTypesAll);
router.get('/2d', optionsController.printTypes2D);

module.exports = router;
