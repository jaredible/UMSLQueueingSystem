const express = require('express');
const router = express.Router();

const loginController = require('../controllers/accountController');

router.all('/', loginController.index);

module.exports = router;
