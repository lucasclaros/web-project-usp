const express = require('express');
const router = express.Router();
const ProductController = require('../controller/products');

// Routes for products
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;