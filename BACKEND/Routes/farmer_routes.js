const express = require("express");

const router = express.Router();

const userController = require('../Controllers/farmer_controller')

router.get("/profile/:uid",userController.getUserById);

module.exports = router;
