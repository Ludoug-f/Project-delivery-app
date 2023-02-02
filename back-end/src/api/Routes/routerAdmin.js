const express = require('express');

const router = express.Router();

const controllerlogin = require('../Controllers/controllerLogin');
// const userMiddleware = require('../userMiddleware');

router.post('/admin/manage', controllerlogin.createAdmUser);

module.exports = router;