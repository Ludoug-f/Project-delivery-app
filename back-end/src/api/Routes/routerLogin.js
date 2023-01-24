const express = require('express');

const router = express.Router();

const ControllerLogin = require('../Controllers/controllerLogin');

router.post('/', ControllerLogin.ctrlLogin);

module.exports = router;