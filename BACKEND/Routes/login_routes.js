const express = require('express');
const { check } = require('express-validator');
const loginController = require('../Controllers/login_controller');

const router = express.Router();

router.post('/login', loginController.login);


module.exports = router;
