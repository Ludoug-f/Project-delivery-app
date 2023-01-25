const express = require('express');

const router = express.Router();

const controllerLogin = require('../Controllers/controllerLogin');

router.post('/', controllerLogin.ctrlLogin);

module.exports = router;