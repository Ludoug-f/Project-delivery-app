const express = require('express');

const router = express.Router();
const { getAllSellersC, 
     getAllUsersC } = require('../Controllers/controllerUser');

router.get('/users/sellers', getAllSellersC);
router.get('/users', getAllUsersC);

module.exports = router;
