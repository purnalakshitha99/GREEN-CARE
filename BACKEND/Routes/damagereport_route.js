const express = require("express");
const damagereport = require("../Controllers/damage_controller");

const router = express.Router();

// create report routes
router
  .route("/damagereportgen")
  .get(damagereport.Allreports)
  .post(damagereport.createDamageReport);

router
  .route("/damagereportgen/:id")
  .patch(damagereport.updateReport)
  .delete(damagereport.deleteReport)
  .get(damagereport.specificReport);

module.exports = router;
