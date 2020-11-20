const express = require('express');
const router = express.Router();

const products_controller = require('../controllers/products_controller')


router.get('/',products_controller.get_all_product);

module.exports = router;