const express = require('express');

const router = express.Router();

const controllerLogin = require('../Controllers/controllerLogin');

router.post('/', controllerLogin.ctrlLogin); // Route for login
router.post('/token', controllerLogin.ctrlToken); // Middleware for token validation

module.exports = router;