const routeConfig = require('../configurations/routes');
const express = require('express');
const router = express.Router();

// Require controller modules.
const homeController = require('../controllers/homeController');

/// HOME ROUTES ///

router.get('/', homeController.index);

module.exports = router;
