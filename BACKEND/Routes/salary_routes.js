const express = require("express");
const salaryController = require("../Controllers/salary_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific salary

router
  .route("/salary")
  .get(salaryController.myAllSalary)
  .post(salaryController.createSalary);

router
  .route("/salary/:id")
  .patch(salaryController.updateMySalary)
  .delete(salaryController.deleteSalary)
  .get(salaryController.specificSalary);

  




module.exports = router;



