const express = require("express");
const fieldcontroller = require("../Controllers/fieldvisitor_controller");

const router = express.Router();


router
  .route("/cusFarmer")
  .get(fieldcontroller.AllCustomers)
  .post(fieldcontroller.addFarmer);

router
  .route("/cusFarmer/:id")
  .patch(fieldcontroller.updateCusFarmer)
  .delete(fieldcontroller.deleteFarmer)
  .get(fieldcontroller.specificFarmer);

module.exports = router;
