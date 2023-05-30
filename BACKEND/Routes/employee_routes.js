const express = require("express");
const emp_consult_controller = require("../Controllers/employee_controller");

const router = express.Router();

// router.post("/empFormSubmit", emp_consult_controller.empFormSubmit);
// router.get("/", emp_consult_controller.empFormSubmit);

router
  .route("/empFormSubmit")
  .get(emp_consult_controller.viewAllEmployee)
  .post(emp_consult_controller.addEmployee);

router
  .route("/empFormSubmit/:id")
  .patch(emp_consult_controller.updateEmployee)
  .delete(emp_consult_controller.deleteEmployee)
  .get(emp_consult_controller.specificEmployee);

module.exports = router;
