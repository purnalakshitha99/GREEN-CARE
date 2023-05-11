const express = require("express");
const fieldcontroller = require("../Controllers/fieldvisitor_controller");
const fieldreport = require("../Controllers/createreport_controller");

const router = express.Router();

// farmer information routes
router
  .route("/cusFarmer")
  .get(fieldcontroller.AllCustomers)
  .post(fieldcontroller.addFarmer);

router
  .route("/cusFarmer/:id")
  .patch(fieldcontroller.updateCusFarmer)
  .delete(fieldcontroller.deleteFarmer)
  .get(fieldcontroller.specificFarmer);

// create report routes
router
  .route("/reportgen")
  .get(fieldreport.Allreports)
  .post(fieldreport.createreport);

router
  .route("/reportgen/:id")
  .patch(fieldreport.updateReport)
  .delete(fieldreport.deleteReport)
  .get(fieldreport.specificReport);

module.exports = router;
