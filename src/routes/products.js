const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { verifyToken, verifyAdmin } = require('../middlewares/auth.middleware');

router.get('/', verifyToken, productController.getAllProducts);
router.get('/:id', verifyToken, productController.getProductById);
router.post('/', verifyToken, verifyAdmin, productController.createProduct);
router.put('/:id', verifyToken, verifyAdmin, productController.updateProduct);
router.delete('/:id', verifyToken, verifyAdmin, productController.deleteProduct);

module.exports = router;