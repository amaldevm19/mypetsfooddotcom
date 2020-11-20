const express = require('express');
const router = express.Router();

const categories_controller = require('../controllers/categories_controller')


router.get('/',categories_controller.get_all_categories);

module.exports = router;