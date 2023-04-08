const express = require("express");
const studentController = require("../Controllers/student_controller");

const router = express.Router();

//This api-resource route for update and delete specific student

router
  .route("/")
  .get(studentController.myAllStudents) //get Student
  .post(studentController.createStudent); //add Student

router
  .route("/:id")
  .patch(studentController.updateStudent) //Update Student
  .delete(studentController.deleteStudent) //Delete Student
  .get(studentController.specificStudent); //Get Specific Student

module.exports = router;
