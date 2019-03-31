const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

router.all('/', dashboardController.index);

module.exports = router;
