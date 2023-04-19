const express = require("express");
const appointmnet_controller = require("../Controllers/appointment_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific appointment

router
  .route("/appointment")
  .get(appointmnet_controller.AllAppointment)
  .post(appointmnet_controller.createAppointment);

router
  .route("/appointment/:id")
  .patch(appointmnet_controller.updateAppointment)
  .delete(appointmnet_controller.deleteAppointment)
  .get(appointmnet_controller.specificAppointment);

module.exports = router;
