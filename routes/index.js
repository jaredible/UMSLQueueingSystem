const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

homeController.getRoutes().forEach(route => {
    router.all(route, homeController.index);
});

module.exports = router;
