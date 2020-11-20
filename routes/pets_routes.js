const express = require('express');
const router = express.Router();

const pets_controller = require('../controllers/pets_controller')


router.get('/',pets_controller.get_all_pets);

module.exports = router;