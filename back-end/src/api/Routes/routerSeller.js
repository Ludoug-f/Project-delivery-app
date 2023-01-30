const express = require('express');
const router = express.Router();
const controllerSeler = require('../Controllers/controllerSeller');

router.get('/seller/orders/:id', controllerSeler.getSale);
router.post('/seller/orders/:id', controllerSeler.newSale);

module.exports = router;