const config = require('../config');
const express = require('express');
const router = express.Router();

// Require controller modules.
const loginController = require('../controllers/loginController');

/// LOGIN ROUTES ///

router.all('/', loginController.index);

module.exports = router;
