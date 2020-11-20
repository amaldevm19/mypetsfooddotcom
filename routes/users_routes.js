var express = require('express');
var router = express.Router();

const users_controller = require('../controllers/users_controller')


router.get('/login', users_controller.login_view);
router.post('/login', users_controller.login);
router.get('/register', users_controller.register_view);
router.post('/register', users_controller.register);
router.get('/logout', users_controller.logout);


module.exports = router;
