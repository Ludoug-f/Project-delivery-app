const express = require('express');

const router = express.Router();

const newuser = require('../Controllers/controllerRegister');

router.post('/', newuser.NewUser);

module.exports = router;