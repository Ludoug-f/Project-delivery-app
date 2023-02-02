const express = require('express');

const router = express.Router();
const { getAllSellersC,
     getSellerbyIdC, 
     getUserbyIdC, 
     getAllUsersC } = require('../Controllers/controllerUser');

router.get('/sellers', getAllSellersC);
router.get('/users', getAllUsersC);
router.get('/seller/:email', getSellerbyIdC);
router.get('/user/:email', getUserbyIdC);

module.exports = router;
