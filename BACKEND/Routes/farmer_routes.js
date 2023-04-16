const express = require("express");
const { check } = require("express-validator");
const userController = require("../Controllers/farmer_controller");

const router = express.Router();

router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(), // normalizeEmail() => convert email to lowercase
    check("password").not().isEmpty().isLength({ min: 8 }),
    check("name").not().isEmpty(),
    check("address").not().isEmpty(),
    check("phone").not().isEmpty(),
  ],
  userController.signup
);

router.post("/login", userController.login);

router.get("/profile/:uid", userController.getUserById);

router.patch(
  "/:uid",
  [
    check("name").not().isEmpty(),
    check("address").not().isEmpty(),
    check("phone").not().isEmpty(),
  ],
  userController.updateUser
);

router.delete("/:uid", userController.deleteUser);

module.exports = router;
