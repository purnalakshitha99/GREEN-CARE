const Employee = require("../Models/employee_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.addEmployee = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_employee = await Employee.create(req.body);
  res.status(201).json({
    status: "success",
    added_employee,
  });
});

//get all items
exports.viewAllEmployee = catchAsync(async (req, res, next) => {
  let all_Employees = await Employee.find();
  res.json(all_Employees);
});

//get specific items
exports.specificEmployee = catchAsync(async (req, res, next) => {
  let employees = await Employee.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      employees,
    },
  });
});

//update employee
exports.updateEmployee = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updateMyEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // this option makes sure that the updated document is returned
  );
  res.status(201).json({
    status: "success",
    data: {
      updateMyEmployee,
    },
  });
});

//Delete employee
exports.deleteEmployee = catchAsync(async (req, res, next) => {
  let deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedEmployee,
    },
  });
});
