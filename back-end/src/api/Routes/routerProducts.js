const express = require('express');

const router = express.Router();

const controllerProduct = require('../Controllers/controllerProduct');

router.get('/products', controllerProduct.getAll); // Route for products

module.exports = router;