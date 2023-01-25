const express = require('express');
const router = express.Router();

const controllerProduct = require('../Controllers/controllerProduct');

router.get('/products', controllerProduct.getAll);

module.exports = router;