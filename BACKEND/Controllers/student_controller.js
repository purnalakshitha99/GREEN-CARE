const Student = require("../Models/students_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createStudent = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_student = await Student.create(req.body);
  res.status(201).json({
    status: "success",
    student: {
      added_student,
    },
  });
});

//get all student
exports.myAllStudents = catchAsync(async (req, res, next) => {
  let all_students = await Student.find({ user: req.user });

  res.status(201).json({
    status: "success",
    students: {
      all_students,
    },
  });
});

//get specific notices
exports.specificStudent = catchAsync(async (req, res, next) => {
  let specificStudent = await Student.findById(req.params.id);

  res.status(201).json({
    status: "success",
    students: {
      specificStudent,
    },
  });
});

//update notices
exports.updateStudent = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let all_students = await Student.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    status: "success",
    student: {
      all_students,
    },
  });
});

//Delete notices
exports.deleteStudent = catchAsync(async (req, res, next) => {
  let deletedStudent = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    student: {
      deletedStudent,
    },
  });
});
