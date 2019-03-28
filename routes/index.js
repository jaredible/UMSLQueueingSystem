const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.all('/', homeController.index);
router.get('/confirmation', homeController.confirmation);

module.exports = router;
