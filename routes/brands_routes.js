const express = require('express');
const router = express.Router();

const brands_controller = require('../controllers/brands_controller')


router.get('/',brands_controller.get_all_brands);

module.exports = router;