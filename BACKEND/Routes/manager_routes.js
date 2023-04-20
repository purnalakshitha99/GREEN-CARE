const express = require("express");
const managerController = require("../Controllers/manager_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student

router
  .route("/manager")
  .get(managerController.allManagers)
  .post(managerController.addManager);

router
  .route("/manager/:id")
  .patch(managerController.updateManager)
  .delete(managerController.deleteManager)
  .get(managerController.specificManager);

module.exports = router;
