const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.all('/login', accountController.index);

module.exports = router;
