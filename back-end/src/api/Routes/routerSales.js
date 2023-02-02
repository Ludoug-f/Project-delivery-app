const express = require('express');
const SalesController = require('../Controllers/controllerSale');

const router = express.Router();

router.post('/', SalesController.Newsale);

module.exports = router;