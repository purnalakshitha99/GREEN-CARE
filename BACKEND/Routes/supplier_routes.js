const express = require("express");
const supplierController = require("../Controllers/supplier_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student

router
  .route("/supplier")
  .get(supplierController.myAllSuppliers)
  .post(supplierController.createSupplier);

router
  .route("/supplier/:id")
  .patch(supplierController.updateSupplier)
  .delete(supplierController.deleteSupplier)
  .get(supplierController.specificSupplier);

module.exports = router;
