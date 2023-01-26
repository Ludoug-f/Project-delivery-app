const express = require('express');

const router = express.Router();

const ControllerUser = require('../Controllers/controllerLogin');
const userMiddleware = require ('../userMiddleware')

router.post('/register', userMiddleware.emailValidate,
userMiddleware.nameValidate, 
userMiddleware.passwordValidate,
ControllerUser.createUser,
);

module.exports = router;