const express = require("express");
const fieldreport = require("../Controllers/createreport_controller");

const router = express.Router();

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