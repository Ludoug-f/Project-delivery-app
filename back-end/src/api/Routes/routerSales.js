const express = require('express');
const SalesController = require('../Controllers/controllerSale');

const router = express.Router();

router.post('/', SalesController.Newsale);
router.get('/', SalesController.getAllSales);
router.get('/:id', SalesController.getSaleById);
router.put('/:id', SalesController.updateSale);
router.delete('/:id', SalesController.deleteSale);

module.exports = router;