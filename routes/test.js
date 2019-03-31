const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');

router.all('/', testController.index);

module.exports = router;
