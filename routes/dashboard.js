const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboard');

router.all('/', dashboardController.index);

module.exports = router;
