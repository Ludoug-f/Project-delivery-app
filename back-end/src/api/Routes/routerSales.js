const express = require('express');
const SaleController = require('../Controllers/controllerSale');

const router = express.Router();

router.post('/', SaleController.NewSale);
router.patch('/', SaleController.updateSales);
router.get('/user/:email', SaleController.getOrdersCUSTOMER);
router.get('/details/:saleId', SaleController.getSaleProducts);
router.get('/', SaleController.getOrdersSELLER);

module.exports = router;